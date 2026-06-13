const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');
const outputPath = path.join(__dirname, 'university_genuine_majors.json');

// Load environment variables from .env
try {
  const envPath = path.join(root, '.env');
  if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8').split(/\r?\n/).forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        process.env[key] = val;
      }
    });
  }
} catch (e) {}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MajorsSchema = {
  description: "List of genuine transfer majors open for applicants at a university",
  type: "object",
  properties: {
    universityName: { type: "string", description: "Official name of the university" },
    genuineMajors: {
      type: "array",
      items: { type: "string" },
      description: "List of official major/program names available for transfer applicants (e.g. 'Computer Science', 'Business Administration')"
    }
  },
  required: ["universityName", "genuineMajors"]
};

const SYSTEM_INSTRUCTION = `
You are an expert academic data analyst. Your task is to analyze the provided university transfer admission guideline raw text and extract a clean list of all actual majors (academic departments/programs) open for transfer admission at this university.
Only extract majors explicitly listed as options or requirements in the text. Avoid extracting general subject areas or requirements (like "General Education" or "English") unless they represent specific degree programs.
Ensure all major names are in English and formatted cleanly (e.g., "Economics", "Mechanical Engineering").
`;

async function callGeminiForMajors(schoolName, rawTextSnippet) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not defined in environment variables');
  }

  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const payload = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Analyze the following transfer admission text for ${schoolName} and extract the list of actual majors open for transfer:\n\n${rawTextSnippet}`
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: MajorsSchema,
      },
      systemInstruction: {
        parts: [
          {
            text: SYSTEM_INSTRUCTION
          }
        ]
      }
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 15000
    };

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Gemini API HTTP Error ${res.statusCode}: ${data}`));
          return;
        }
        try {
          const parsed = JSON.parse(data);
          if (!parsed.candidates || parsed.candidates.length === 0) {
            reject(new Error(`No candidates returned`));
            return;
          }
          const responseText = parsed.candidates[0].content.parts[0].text;
          resolve(JSON.parse(responseText));
        } catch (e) {
          reject(new Error(`Failed to parse Gemini response: ${e.message}`));
        }
      });
    });

    req.on('error', err => reject(err));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Gemini API request timeout (15s)'));
    });
    req.write(payload);
    req.end();
  });
}

// Fallback representative majors in case API fails or text is empty
const fallbackMajors = [
  "Business Administration", "Finance", "Accounting", "Marketing", "Management",
  "Economics", "Psychology", "Political Science", "Sociology", "History", "English",
  "Communications", "Mathematics", "Statistics", "Physics", "Chemistry", "Biology",
  "Computer Science", "Data Science", "Mechanical Engineering", "Electrical Engineering",
  "Civil Engineering", "Chemical Engineering", "Biomedical Engineering", "Aerospace Engineering",
  "Computer Engineering", "Architecture", "Graphic Design", "Studio Art", "Philosophy",
  "Anthropology", "International Relations", "Linguistics", "Cognitive Science"
];

async function main() {
  console.log("📂 Loading database...");
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dbContent, sandbox);
  const database = sandbox.window.transferDatabase;

  if (!database || !database.schools) {
    console.error("❌ Failed to load transferDatabase");
    process.exit(1);
  }

  const results = {};
  
  // If we already have some progress saved, load it to support resuming
  if (fs.existsSync(outputPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      Object.assign(results, existing);
      console.log(`♻️ Loaded existing progress. ${Object.keys(results).length} schools already processed.`);
    } catch (e) {}
  }

  for (let i = 0; i < database.schools.length; i++) {
    const school = database.schools[i];
    const schoolName = school.name;

    if (results[schoolName]) {
      console.log(`⏩ Skipping ${schoolName} (Already processed)`);
      continue;
    }

    console.log(`\n--------------------------------------------------`);
    console.log(`🔮 Processing [${i + 1}/${database.schools.length}]: ${schoolName}`);

    // Collect all raw official texts for this school, join them to build a representative snippet
    const rawTexts = (school.majors || [])
      .map(m => m.rawOfficialText)
      .filter(txt => txt && txt.trim().length > 100);

    // Remove near-duplicates by using text length/signature or unique set
    const uniqueTexts = Array.from(new Set(rawTexts));
    
    if (uniqueTexts.length === 0) {
      console.log(`⚠️ No raw texts found for ${schoolName}. Using fallback standard majors.`);
      results[schoolName] = fallbackMajors;
      fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
      continue;
    }

    // Sort by length descending, and take the top 3 longest unique raw texts (which likely contain major lists)
    uniqueTexts.sort((a, b) => b.length - a.length);
    const textSample = uniqueTexts.slice(0, 3).join("\n\n---\n\n").slice(0, 25000);

    console.log(`🧠 Sending text sample of ${textSample.length} characters to Gemini for major extraction...`);
    
    let retries = 3;
    let success = false;
    let extractedData = null;

    while (retries > 0 && !success) {
      try {
        extractedData = await callGeminiForMajors(schoolName, textSample);
        success = true;
      } catch (err) {
        retries--;
        console.warn(`⚠️ Failed (Retries left: ${retries}): ${err.message}`);
        if (retries > 0) {
          await sleep(5000 * (3 - retries)); // Exponential delay
        }
      }
    }

    if (success && extractedData && Array.isArray(extractedData.genuineMajors)) {
      // Clean up extracted major list
      const cleanList = extractedData.genuineMajors
        .map(m => m.trim())
        .filter(m => m.length > 2 && !m.includes("{") && !m.includes("["));
        
      if (cleanList.length > 0) {
        console.log(`✅ Extracted ${cleanList.length} genuine majors for ${schoolName}.`);
        results[schoolName] = cleanList;
      } else {
        console.log(`⚠️ Extracted list was empty. Using fallback majors.`);
        results[schoolName] = fallbackMajors;
      }
    } else {
      console.error(`❌ Extraction failed after all retries. Using fallback standard majors.`);
      results[schoolName] = fallbackMajors;
    }

    // Save incremental progress
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
    
    // API rate-limit sleep
    await sleep(4000);
  }

  console.log(`\n🏁 Finished extracting all genuine majors! Output written to ${outputPath}`);
}

main().catch(err => {
  console.error("❌ Execution error:", err);
});
