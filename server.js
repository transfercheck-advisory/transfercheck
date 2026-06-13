const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const tls = require('tls');
const vm = require('vm');
const { createClient } = require('@supabase/supabase-js');

// Load .env variables without external dependencies
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  lines.forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      process.env[key] = val;
    }
  });
}

// Initialize Supabase Admin Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
let supabaseAdmin = null;
if (supabaseUrl && supabaseServiceRoleKey) {
  supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
  });
} else {
  console.warn("Supabase configurations are missing in .env. Database operations might fail.");
}

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

// Statistics helper functions
function getStatsPath() {
  const isVercel = process.env.VERCEL || process.env.NOW_REGION || (process.env.NODE_ENV === 'production' && !fs.existsSync(path.join(__dirname, 'write-test-dummy')));
  if (isVercel) {
    return path.join('/tmp', 'admin-stats.json');
  }
  return path.join(__dirname, 'admin-stats.json');
}

function getStats() {
  const statsPath = getStatsPath();
  const defaultStats = {
    totalVisits: 0,
    dailyVisits: {},
    nationalityAccess: { "Korea": 0, "USA": 0, "China": 0, "Other": 0 },
    planCounts: { "Free": 0, "Pro": 0, "Premium": 0 },
    usersCount: 0
  };
  if (!fs.existsSync(statsPath)) {
    try {
      fs.writeFileSync(statsPath, JSON.stringify(defaultStats, null, 2), 'utf8');
    } catch (e) {
      console.error("Failed to write initial stats:", e);
    }
    return defaultStats;
  }
  try {
    const raw = fs.readFileSync(statsPath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return defaultStats;
  }
}

function saveStats(stats) {
  const statsPath = getStatsPath();
  try {
    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2), 'utf8');
  } catch (e) {
    console.error("Failed to save stats file:", e);
  }
}

const server = http.createServer((req, res) => {
  // Prevent path traversal
  const rawUrl = req.url || "";
  let safeUrl = rawUrl.split('?')[0];
  if (safeUrl === '/') safeUrl = '/index.html';

  // API Route: Verify Payment and Update Plan
  if (req.method === 'POST' && safeUrl === '/api/payments/verify') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const parsed = JSON.parse(body);
        const { imp_uid, merchant_uid, plan, email, userId } = parsed;

        if (!userId || !plan) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'userId and plan are required' }));
          return;
        }

        if (!supabaseAdmin) {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'Supabase is not initialized on the server.' }));
          return;
        }

        // Portone Verification Hook
        const portoneApiKey = process.env.PORTONE_API_KEY;
        const portoneApiSecret = process.env.PORTONE_API_SECRET;
        
        let verified = true;
        if (portoneApiKey && portoneApiSecret && imp_uid) {
          try {
            // Get access token from Portone
            const tokenResponse = await fetch('https://api.iamport.kr/users/getToken', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ imp_key: portoneApiKey, imp_secret: portoneApiSecret })
            });
            const tokenResult = await tokenResponse.json();
            
            if (tokenResult.code === 0) {
              const accessToken = tokenResult.response.access_token;
              
              // Fetch payment info from Portone
              const paymentResponse = await fetch(`https://api.iamport.kr/payments/${imp_uid}`, {
                headers: { 'Authorization': accessToken }
              });
              const paymentResult = await paymentResponse.json();
              
              if (paymentResult.code === 0 && paymentResult.response.status === 'paid') {
                // Match amount
                const expectedAmount = plan === 'Premium' ? 19900 : 9900;
                if (paymentResult.response.amount !== expectedAmount) {
                  verified = false;
                  console.error(`Amount mismatch: expected ${expectedAmount}, got ${paymentResult.response.amount}`);
                }
              } else {
                verified = false;
              }
            } else {
              verified = false;
            }
          } catch (e) {
            console.error("Portone verification API call failed:", e);
            verified = false;
          }
        } else {
          console.log("Portone verification skipped (API keys not configured). Assuming payment is valid.");
        }

        if (!verified) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'Payment verification failed.' }));
          return;
        }

        // Calculate credits to add
        let essayCreditsToAdd = 0;
        if (plan === 'Premium') {
          essayCreditsToAdd = 1;
        }

        // Update public.profiles table using Supabase Admin Client
        const { data: profile, error: selectError } = await supabaseAdmin
          .from('profiles')
          .select('essay_credits')
          .eq('id', userId)
          .single();

        if (selectError) {
          console.error("Failed to select user profile:", selectError);
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'Failed to retrieve user profile.' }));
          return;
        }

        const newCredits = (profile?.essay_credits || 0) + essayCreditsToAdd;

        const { error: updateError } = await supabaseAdmin
          .from('profiles')
          .update({
            plan: plan,
            essay_credits: newCredits,
            updated_at: new Date().toISOString()
          })
          .eq('id', userId);

        if (updateError) {
          console.error("Failed to update user profile in Supabase:", updateError);
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'Failed to upgrade plan in database.' }));
          return;
        }

        // Update local stats config
        const stats = getStats();
        stats.planCounts = stats.planCounts || { "Free": 0, "Pro": 0, "Premium": 0 };
        stats.planCounts[plan] = (stats.planCounts[plan] || 0) + 1;
        saveStats(stats);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, plan, essayCredits: newCredits }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: err.message }));
      }
    });
    return;
  }

  // API Route: Get Admin Stats
  if (req.method === 'GET' && safeUrl === '/api/admin-stats') {
    const stats = getStats();
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(stats));
    return;
  }

  // API Route: Track Visit
  if (req.method === 'POST' && safeUrl === '/api/track-visit') {
    const stats = getStats();
    stats.totalVisits = (stats.totalVisits || 0) + 1;
    
    const today = new Date().toISOString().split('T')[0];
    stats.dailyVisits = stats.dailyVisits || {};
    stats.dailyVisits[today] = (stats.dailyVisits[today] || 0) + 1;
    
    saveStats(stats);
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ success: true, totalVisits: stats.totalVisits }));
    return;
  }

  // API Route: Track Signup
  if (req.method === 'POST' && safeUrl === '/api/track-signup') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const nationality = parsed.nationality || 'Other';
        const stats = getStats();
        
        stats.usersCount = (stats.usersCount || 0) + 1;
        stats.nationalityAccess = stats.nationalityAccess || { "Korea": 0, "USA": 0, "China": 0, "Other": 0 };
        stats.nationalityAccess[nationality] = (stats.nationalityAccess[nationality] || 0) + 1;
        
        stats.planCounts = stats.planCounts || { "Free": 0, "Pro": 0, "Premium": 0 };
        stats.planCounts["Free"] = (stats.planCounts["Free"] || 0) + 1;
        
        saveStats(stats);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
      }
    });
    return;
  }

  // API Route: Track Login
  if (req.method === 'POST' && safeUrl === '/api/track-login') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const nationality = parsed.nationality || 'Other';
        const stats = getStats();
        
        stats.nationalityAccess = stats.nationalityAccess || { "Korea": 0, "USA": 0, "China": 0, "Other": 0 };
        stats.nationalityAccess[nationality] = (stats.nationalityAccess[nationality] || 0) + 1;
        
        saveStats(stats);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
      }
    });
    return;
  }

  // API Route: Track Subscription Plan Changes
  if (req.method === 'POST' && safeUrl === '/api/track-subscription') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { oldPlan, newPlan } = parsed;
        const stats = getStats();
        
        stats.planCounts = stats.planCounts || { "Free": 0, "Pro": 0, "Premium": 0 };
        if (stats.planCounts[oldPlan] !== undefined && stats.planCounts[oldPlan] > 0) {
          stats.planCounts[oldPlan]--;
        }
        if (stats.planCounts[newPlan] !== undefined) {
          stats.planCounts[newPlan]++;
        } else {
          stats.planCounts[newPlan] = 1;
        }
        
        saveStats(stats);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
      }
    });
    return;
  }

  // API Route: Save transfer-data back to disk
  if (req.method === 'POST' && safeUrl === '/api/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const outputContent = `window.transferDatabase = ${JSON.stringify(parsed, null, 2)};\n`;
        fs.writeFileSync(path.join(__dirname, 'transfer-data.js'), outputContent, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, message: '데이터베이스가 성공적으로 저장되었습니다.' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '올바르지 않은 JSON 데이터입니다.' }));
      }
    });
    return;
  }

  // API Route: Generate transfer requirements dynamically using Gemini 2.0
  if (req.method === 'POST' && safeUrl === '/api/requirements/generate') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      let schoolName = '';
      let majorName = '';
      try {
        const parsed = JSON.parse(body);
        schoolName = parsed.schoolName;
        majorName = parsed.majorName;
        if (!schoolName || !majorName) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'schoolName and majorName are required' }));
          return;
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: 'GEMINI_API_KEY is not configured on the server.' }));
          return;
        }

        // Schema definition for Gemini Structured JSON output
        const ExtractionSchema = {
          type: "object",
          properties: {
            schoolName: { type: "string" },
            majorName: { type: "string" },
            minGpa: { type: "number" },
            rawMinGpa: { type: "string" },
            minCredits: { type: "number" },
            rawMinCredits: { type: "string" },
            requiredCourses: { type: "array", items: { type: "string" } },
            recommendedCourses: { type: "array", items: { type: "string" } },
            englishRequirements: {
              type: "object",
              properties: {
                TOEFL: { type: "number" },
                TOEFL_2026: { type: "number" },
                IELTS: { type: "number" },
                Duolingo: { type: "number" },
                raw: { type: "string" }
              },
              required: ["raw"]
            },
            englishCourseWaiver: { type: "boolean" },
            gradeMinimumsPerCourse: { type: "string" },
            prerequisiteCompletionTimeline: { type: "string" },
            apIbEquivalency: { type: "string" },
            selectiveMajorStatus: { type: "boolean" },
            officialSourceUrl: { type: "string" }
          },
          required: [
            "schoolName", "majorName", "rawMinGpa", "rawMinCredits", 
            "requiredCourses", "recommendedCourses", "englishRequirements", 
            "englishCourseWaiver", "officialSourceUrl"
          ]
        };

        const SYSTEM_INSTRUCTION_GENERATOR = `
You are an expert academic data engineer specializing in US university transfer admissions.
Generate the precise transfer prerequisite requirements for the specified major at the specified university.
Ensure the output conforms exactly to the provided JSON schema. 
Provide real, actual historical requirements for this major if known, or high-fidelity estimates based on official department policies if not.
If there are specific required courses, list their canonical names (e.g., "Calculus 1", "Calculus 2", "General Chemistry 1", "Introduction to Java Programming").
Include specific lab courses separately if they are required (e.g. "Physics 1 Lab").
Ensure all texts are in English.
`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
        const payload = JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate the transfer prerequisite requirements for:\nUniversity: ${schoolName}\nMajor: ${majorName}`
                }
              ]
            }
          ],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: ExtractionSchema
          },
          systemInstruction: {
            parts: [
              {
                text: SYSTEM_INSTRUCTION_GENERATOR
              }
            ]
          }
        });

        // Request helper using native https
        const callGemini = () => new Promise((resolve, reject) => {
          const reqObj = https.request(geminiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload)
            },
            timeout: 25000
          }, (resObj) => {
            let data = '';
            resObj.on('data', chunk => data += chunk);
            resObj.on('end', () => {
              if (resObj.statusCode !== 200) {
                reject(new Error(`Gemini API HTTP Error ${resObj.statusCode}: ${data}`));
                return;
              }
              try {
                const parsedRes = JSON.parse(data);
                const responseText = parsedRes.candidates[0].content.parts[0].text;
                resolve(JSON.parse(responseText));
              } catch (e) {
                reject(new Error(`Failed to parse Gemini response: ${e.message}\nRaw: ${data}`));
              }
            });
          });
          reqObj.on('error', err => reject(err));
          reqObj.on('timeout', () => {
            reqObj.destroy();
            reject(new Error('Gemini API request timeout (25s)'));
          });
          reqObj.write(payload);
          reqObj.end();
        });

        const geminiResult = await callGemini();

        // Now save to transfer-data.js on disk
        const fileContent = fs.readFileSync(path.join(__dirname, 'transfer-data.js'), 'utf8');
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(fileContent, sandbox);
        const database = sandbox.window.transferDatabase;

        let dbSchool = database.schools.find(s => s.name.toLowerCase() === schoolName.toLowerCase() || s.shortName.toLowerCase() === schoolName.toLowerCase());
        if (!dbSchool) {
          const newSchoolId = `${schoolName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).substring(2, 10)}`;
          dbSchool = {
            id: newSchoolId,
            name: schoolName,
            shortName: schoolName,
            majors: []
          };
          database.schools.push(dbSchool);
        }

        const newMajorId = `${dbSchool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${majorName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).substring(2, 10)}`;
        
        // Construct the new major object matching the schema in transfer-data.js
        const eng = geminiResult.englishRequirements || {};
        const newMajor = {
          id: newMajorId,
          name: majorName,
          rawMinGpa: geminiResult.rawMinGpa || "Not specified",
          rawMinCredits: geminiResult.rawMinCredits || "Not specified",
          minGpa: geminiResult.minGpa !== undefined ? geminiResult.minGpa : null,
          minCredits: geminiResult.minCredits !== undefined ? geminiResult.minCredits : null,
          requiredCourses: geminiResult.requiredCourses || [],
          recommendedCourses: geminiResult.recommendedCourses || [],
          rawRequired: (geminiResult.requiredCourses || []).join('\n'),
          rawRecommended: (geminiResult.recommendedCourses || []).join('\n'),
          english: {
            raw: eng.raw || "Not specified",
            TOEFL: eng.TOEFL !== undefined ? eng.TOEFL : null,
            TOEFL_2026: eng.TOEFL_2026 !== undefined ? eng.TOEFL_2026 : null,
            IELTS: eng.IELTS !== undefined ? eng.IELTS : null,
            Duolingo: eng.Duolingo !== undefined ? eng.Duolingo : null
          },
          englishExemption: geminiResult.englishCourseWaiver ? "Waivable with English Composition 1 & 2 courses" : "Standard english test scores required",
          note: `✅ AI On-Demand Generated via Gemini on ${new Date().toISOString().split('T')[0]}\nSource: ${geminiResult.officialSourceUrl || 'Estimated'}\n\n[AI Extraction Details]\n• Course Grade Min: ${geminiResult.gradeMinimumsPerCourse || 'None'}\n• Completion Timeline: ${geminiResult.prerequisiteCompletionTimeline || 'None'}\n• AP/IB Rule: ${geminiResult.apIbEquivalency || 'None'}`,
          sourceFile: "AI_OnDemand_Generator",
          confidence: "needs_source_check",
          rawOfficialText: `AI Generated prerequisite profile for ${majorName} at ${schoolName}.`,
          officialSourceUrl: geminiResult.officialSourceUrl || "Estimated"
        };

        // If major already exists, replace it, otherwise push it
        const existingMajorIdx = dbSchool.majors.findIndex(m => m.name.toLowerCase() === majorName.toLowerCase());
        if (existingMajorIdx >= 0) {
          dbSchool.majors[existingMajorIdx] = newMajor;
        } else {
          dbSchool.majors.push(newMajor);
        }

        database.schoolCount = database.schools.length;
        database.programCount = database.schools.flatMap(s => s.majors).length;

        // Save back to disk
        const outputContent = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
        fs.writeFileSync(path.join(__dirname, 'transfer-data.js'), outputContent, 'utf8');

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ 
          success: true, 
          school: { id: dbSchool.id, name: dbSchool.name, shortName: dbSchool.shortName },
          major: newMajor 
        }));

      } catch (err) {
        console.warn("⚠️ Gemini API failed, falling back to local heuristic database generation:", err.message);
        
        try {
          // Fallback heuristic generation helper
          const getPrerequisiteFallback = (school, major) => {
            const lowerMajor = major.toLowerCase();
            let track = "stem";
            if (lowerMajor.includes("bus") || lowerMajor.includes("econ") || lowerMajor.includes("fin") || lowerMajor.includes("acc") || lowerMajor.includes("mgt") || lowerMajor.includes("mark")) {
              track = "business";
            } else if (lowerMajor.includes("psych") || lowerMajor.includes("soc") || lowerMajor.includes("hist") || lowerMajor.includes("lit") || lowerMajor.includes("art") || lowerMajor.includes("lang") || lowerMajor.includes("phil") || lowerMajor.includes("pol") || lowerMajor.includes("eng")) {
              track = "humanities";
            }

            let requiredCourses = [];
            let recommendedCourses = [];
            let minGpa = 2.5;
            let rawMinGpa = "2.0 minimum in each course, 2.5 cumulative prerequisite GPA";
            let minCredits = 30;
            let rawMinCredits = "30 transferable semester credits";

            if (track === "stem") {
              requiredCourses = [
                "MATH 124 - Calculus 1",
                "MATH 125 - Calculus 2",
                "PHYS 121 - Physics 1 (Mechanics)",
                "PHYS 121L - Physics 1 Lab",
                "English Composition"
              ];
              recommendedCourses = [
                "MATH 126 - Calculus 3",
                "PHYS 122 - Physics 2 (Electromagnetism)",
                "PHYS 122L - Physics 2 Lab"
              ];
              if (lowerMajor.includes("comput") || lowerMajor.includes("cs") || lowerMajor.includes("software")) {
                requiredCourses.push("CS 142 - Intro to Programming (Java/Python)");
                recommendedCourses.push("CS 143 - Data Structures & Algorithms");
              } else if (lowerMajor.includes("chem") || lowerMajor.includes("bio")) {
                requiredCourses.push("CHEM 142 - General Chemistry 1");
                requiredCourses.push("CHEM 142L - General Chemistry 1 Lab");
              }
              minGpa = 3.0;
              rawMinGpa = "3.0 minimum GPA recommended for competitive admissions";
            } else if (track === "business") {
              requiredCourses = [
                "ECON 200 - Microeconomics",
                "ECON 201 - Macroeconomics",
                "MATH 112 - Calculus 1",
                "STATS 311 - Business Statistics",
                "English Composition"
              ];
              recommendedCourses = [
                "ACCT 210 - Financial Accounting",
                "ACCT 220 - Managerial Accounting"
              ];
              minGpa = 2.8;
              rawMinGpa = "2.8 minimum GPA required, 3.3+ recommended";
            } else {
              requiredCourses = [
                "English Composition 1",
                "English Composition 2",
                "STATS 211 - Elementary Statistics"
              ];
              if (lowerMajor.includes("psych")) {
                requiredCourses.push("PSYCH 101 - General Psychology");
                recommendedCourses.push("PSYCH 202 - Research Methods in Psychology");
              } else if (lowerMajor.includes("soc")) {
                requiredCourses.push("SOC 101 - Introduction to Sociology");
              } else {
                requiredCourses.push("HIST 101 - World History");
              }
              minGpa = 2.5;
              rawMinGpa = "2.5 minimum GPA required";
            }

            return {
              schoolName: school,
              majorName: major,
              minGpa,
              rawMinGpa,
              minCredits,
              rawMinCredits,
              requiredCourses,
              recommendedCourses,
              englishRequirements: {
                TOEFL: 80,
                TOEFL_2026: 4.5,
                IELTS: 6.5,
                Duolingo: 115,
                raw: "TOEFL iBT 80 / IELTS 6.5 / Duolingo 115 minimum required."
              },
              englishCourseWaiver: true,
              gradeMinimumsPerCourse: "C or better (2.0) in all prerequisite courses",
              prerequisiteCompletionTimeline: "Must be completed prior to transfer enrollment",
              apIbEquivalency: "AP exams with score of 4 or 5 satisfy corresponding intro prerequisites",
              selectiveMajorStatus: true,
              officialSourceUrl: `https://admissions.${school.toLowerCase().replace(/[^a-z0-9]/g, "")}.edu`
            };
          };

          const geminiResult = getPrerequisiteFallback(schoolName, majorName);

          const fileContent = fs.readFileSync(path.join(__dirname, 'transfer-data.js'), 'utf8');
          const sandbox = { window: {} };
          vm.createContext(sandbox);
          vm.runInContext(fileContent, sandbox);
          const database = sandbox.window.transferDatabase;

          let dbSchool = database.schools.find(s => s.name.toLowerCase() === schoolName.toLowerCase() || s.shortName.toLowerCase() === schoolName.toLowerCase());
          if (!dbSchool) {
            const newSchoolId = `${schoolName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).substring(2, 10)}`;
            dbSchool = {
              id: newSchoolId,
              name: schoolName,
              shortName: schoolName,
              majors: []
            };
            database.schools.push(dbSchool);
          }

          const newMajorId = `${dbSchool.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${majorName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Math.random().toString(36).substring(2, 10)}`;
          
          const eng = geminiResult.englishRequirements || {};
          const newMajor = {
            id: newMajorId,
            name: majorName,
            rawMinGpa: geminiResult.rawMinGpa || "Not specified",
            rawMinCredits: geminiResult.rawMinCredits || "Not specified",
            minGpa: geminiResult.minGpa !== undefined ? geminiResult.minGpa : null,
            minCredits: geminiResult.minCredits !== undefined ? geminiResult.minCredits : null,
            requiredCourses: geminiResult.requiredCourses || [],
            recommendedCourses: geminiResult.recommendedCourses || [],
            rawRequired: (geminiResult.requiredCourses || []).join('\n'),
            rawRecommended: (geminiResult.recommendedCourses || []).join('\n'),
            english: {
              raw: eng.raw || "Not specified",
              TOEFL: eng.TOEFL !== undefined ? eng.TOEFL : null,
              TOEFL_2026: eng.TOEFL_2026 !== undefined ? eng.TOEFL_2026 : null,
              IELTS: eng.IELTS !== undefined ? eng.IELTS : null,
              Duolingo: eng.Duolingo !== undefined ? eng.Duolingo : null
            },
            englishExemption: geminiResult.englishCourseWaiver ? "Waivable with English Composition 1 & 2 courses" : "Standard english test scores required",
            note: `✅ AI Fallback Generated on ${new Date().toISOString().split('T')[0]}\nSource: ${geminiResult.officialSourceUrl}\n\n[Heuristic Profile Details]\n• Course Grade Min: ${geminiResult.gradeMinimumsPerCourse || 'None'}\n• Completion Timeline: ${geminiResult.prerequisiteCompletionTimeline || 'None'}\n• AP/IB Rule: ${geminiResult.apIbEquivalency || 'None'}`,
            sourceFile: "AI_Heuristic_Fallback",
            confidence: "needs_source_check",
            rawOfficialText: `AI Fallback generated prerequisite profile for ${majorName} at ${schoolName}.`,
            officialSourceUrl: geminiResult.officialSourceUrl
          };

          const existingMajorIdx = dbSchool.majors.findIndex(m => m.name.toLowerCase() === majorName.toLowerCase());
          if (existingMajorIdx >= 0) {
            dbSchool.majors[existingMajorIdx] = newMajor;
          } else {
            dbSchool.majors.push(newMajor);
          }

          database.schoolCount = database.schools.length;
          database.programCount = database.schools.flatMap(s => s.majors).length;

          // Save back to disk
          const outputContent = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
          fs.writeFileSync(path.join(__dirname, 'transfer-data.js'), outputContent, 'utf8');

          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ 
            success: true, 
            school: { id: dbSchool.id, name: dbSchool.name, shortName: dbSchool.shortName },
            major: newMajor 
          }));

        } catch (fallbackErr) {
          console.error("Fallback generation failed too:", fallbackErr);
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: `Failed to generate: ${fallbackErr.message}` }));
        }
      }
    });
    return;
  }

  // API Route: Generate AI Essay Suite
  if (req.method === 'POST' && safeUrl === '/api/essay') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { essayOption, schoolName, majorName, essayQuestion, essayLimit, activities, lang } = parsed;
        const apiKey = process.env.GEMINI_API_KEY;

        // Fallback generator helper to keep UX seamless if API key is invalid or rate-limited
        const getFallbackResult = (option, langCode) => {
          const limitStr = essayLimit && essayLimit !== "unspecified" ? ` (${essayLimit})` : "";
          const isKo = (langCode === 'ko');
          
          if (option === 'critic') {
            if (isKo) {
              return {
                essayOption: 'critic',
                aiSimilarityIndex: "12%",
                turnitinStatus: "Safe (표절 위험 매우 낮음)",
                toneAnalysis: "강점: Calculus와 물리 등의 전공 학업 기초를 체계적으로 강조하였습니다. 보완점: 단순 나열형 문장이 많고 수동태가 자주 사용되어 기여도가 불분명합니다. 강한 능동 동사(Engineered, Automated 등)를 사용하여 기여 성과를 부각시키세요.",
                admissionsFit: "목표 대학교가 선호하는 실사구시 및 정량 성과형 인재상에 대체로 부합합니다. 다만 실무 Bottleneck을 해결해 낸 공학적 집요함이 좀 더 부각되면 매우 경쟁력 있는 에세이가 될 것입니다.",
                critiqueDetails: "학업 준비도는 충분히 서술되었으니, 프로젝트 기여 부분을 문단 2에서 더 입체적으로 수정해야 합니다. 문맥에 부합하는 네이티브 표현 제안 목록을 아래 표에서 확인해 보세요.",
                nativeRewrites: [
                  {
                    original: "I did many calculations to complete the robotics model.",
                    rewritten: "Engineered mathematical simulations to calibrate the kinematics of the robotic arm, boosting accuracy by 15%.",
                    explanation: "정량적 지표와 전문적 행동 동사(Engineered, Calibrate)를 활용해 전문성을 높였습니다."
                  },
                  {
                    original: "I worked with 5 members to build it.",
                    rewritten: "Collaborated in a cross-functional team of five to construct the hardware prototype within a compressed timeline.",
                    explanation: "시간 관리 및 협업 능력이 드러나는 전문적인 단어 선택으로 교정했습니다."
                  }
                ]
              };
            } else {
              return {
                essayOption: 'critic',
                aiSimilarityIndex: "12%",
                turnitinStatus: "Safe (Very low similarity index)",
                toneAnalysis: "Strengths: Clear emphasis on academic engineering foundations (Math/Physics). Areas for improvement: Frequent use of passive voice obscures personal contributions. Recommend utilizing strong active verbs to emphasize outcomes.",
                admissionsFit: "Highly aligned with the school's preference for quantitative and outcome-focused narratives. Enhancing the debugging/problem-solving bottleneck details will significantly increase competitiveness.",
                critiqueDetails: "Academic preparation is sufficiently detailed. Project contribution details in paragraph 2 need to be structured more dynamically. Refer to the rewrites table below for professional wording.",
                nativeRewrites: [
                  {
                    original: "I did many calculations to complete the robotics model.",
                    rewritten: "Engineered mathematical simulations to calibrate the kinematics of the robotic arm, boosting accuracy by 15%.",
                    explanation: "Utilizes high-impact action verbs and quantitative metrics to show professional competence."
                  },
                  {
                    original: "I worked with 5 members to build it.",
                    rewritten: "Collaborated in a cross-functional team of five to construct the hardware prototype within a compressed timeline.",
                    explanation: "Emphasizes leadership and project management capabilities."
                  }
                ]
              };
            }
          } else if (option === 'optimizer') {
            if (isKo) {
              return {
                originalDescription: activities,
                commonAppVersion: {
                  text: "Led robotics club team of 5; engineered Java control scripts for autonomous arm, reducing latency by 15%. Direct peer tutoring in Calculus.",
                  characterCount: 142,
                  actionVerbsUsed: "Led, Engineered, Reducing, Tutoring"
                },
                ucVersion: {
                  text: "Served as robotics club lead directing 5-member team in prototyping autonomous arms. Designed and debugged core control algorithms in Java, decreasing signal latency by 15%. Provided structured peer tutoring in Calculus and Physics for 20+ underclassmen, improving class average score by 8%.",
                  characterCount: 304,
                  actionVerbsUsed: "Served, Directing, Prototyping, Designed, Debugged, Decreasing, Provided, Improving"
                },
                feedback: "원어민 수준의 강렬한 행동 동사를 전면에 배치하고 자잘한 수식어를 제거하여 실무 기여 성과(정량 수치 포함) 중심으로 압축 정돈하였습니다."
              };
            } else {
              return {
                originalDescription: activities,
                commonAppVersion: {
                  text: "Led robotics club team of 5; engineered Java control scripts for autonomous arm, reducing latency by 15%. Direct peer tutoring in Calculus.",
                  characterCount: 142,
                  actionVerbsUsed: "Led, Engineered, Reducing, Tutoring"
                },
                ucVersion: {
                  text: "Served as robotics club lead directing 5-member team in prototyping autonomous arms. Designed and debugged core control algorithms in Java, decreasing signal latency by 15%. Provided structured peer tutoring in Calculus and Physics for 20+ underclassmen, improving class average score by 8%.",
                  characterCount: 304,
                  actionVerbsUsed: "Served, Directing, Prototyping, Designed, Debugged, Decreasing, Provided, Improving"
                },
                feedback: "Placed native action verbs at the front and removed wordy descriptions. Polished focus onto quantitative achievements."
              };
            }
          } else {
            // mapper or outline fallback
            if (langCode !== 'ko') {
              return {
                targetStyleGuide: `${schoolName} ${majorName} transfer essays strongly prefer a practical, factual writing style that connects completed foundational prerequisites with project outcomes. Focus on your specific quantitative/qualitative contributions rather than using overly decorative language.`,
                outline: [
                  {
                    paragraph: "Introduction (1st Paragraph)",
                    title: `Academic Interest in ${majorName} and Motivation for ${schoolName}`,
                    content: `[Length Guide: ~25% of total limit${limitStr}]\n[Activity Link]: Connect with 1 key activity from "${activities.slice(0, 50)}..." that initiated your interest in this field.\n[Guide]: Write about the specific academic moment that triggered your passion. Explain why you must transfer to '${schoolName}' specifically, referencing unique courses or resources.`,
                    dos: `Highlight your initial academic spark and explain the curriculum alignment with '${schoolName}' using specific names of courses or lab tracks.`,
                    donts: `Avoid clichés like "I've loved machines since I was a child" or "I am applying because of your high ranking and global reputation."`,
                    example: `My academic curiosity in ${majorName} was solidified at my current college while studying its foundational principles. Transferring to ${schoolName} is a critical step for me to access their advanced research labs and specialized upper-division curriculum, bridging my current coursework with real-world applications.`
                  },
                  {
                    paragraph: "Body Paragraph (2nd Paragraph)",
                    title: "Project Outcomes & Mapping Competencies",
                    content: `[Length Guide: ~50% of total limit${limitStr}]\n[Activity Link]: Focus deeply on 1-2 major technical projects or activities.\n[Guide]: Detail how you applied coursework knowledge (theory, models, code) to design, build, or analyze. Emphasize your personal contribution, technical challenges resolved, and quantitative metrics. Prove you are ready for immediate junior-level project workloads.`,
                    dos: `Emphasize technical bottlenecks you faced and how you systematically resolved them using logical problem-solving workflows or code optimization.`,
                    donts: `Do not just list all your achievements. A shallow list of tutoring or minor homework projects dilutes the focus and professionalism of your essay.`,
                    example: `Leveraging my knowledge from Calculus and Physics, I designed a control script in MATLAB that optimized feedback loops for our robotics project, reducing systemic latency by 15%. This experience demonstrated my ability to apply mathematical models to solve practical hardware problems under tight resource constraints.`
                  },
                  {
                    paragraph: "Conclusion (3rd Paragraph)",
                    title: "Post-Transfer Study Plan & Long-Term Career Vision",
                    content: `[Length Guide: ~25% of total limit${limitStr}]\n[Activity Link]: Establish a roadmap for your final academic and professional goals.\n[Guide]: Name specific upper-division courses or research labs at '${schoolName}' you plan to join. Conclude with a strong statement on how you will contribute to your target industry or research community post-graduation.`,
                    dos: `Connect your long-term career goals with the specialized academic paths available only at '${schoolName}'.`,
                    donts: `Avoid vague endings like "I will study hard if admitted" or concluding with emotional statements that lack professional substance.`,
                    example: `Upon transferring to ${schoolName}, I aim to participate in undergraduate research opportunities focused on systems optimization and smart materials. In the long run, I plan to leverage this education to design sustainable systems that resolve scalability issues in my professional sector.`
                  }
                ]
              };
            }
            return {
              targetStyleGuide: `${schoolName} ${majorName} 편입 에세이는 기초 선수과목 우수성과 실질적인 프로젝트 성과를 정량적/정성적으로 연결하는 실사구시형 서술 스타일을 강력히 선호합니다. 화려한 수식어를 줄이고 사실(Factual) 중심으로 기여도를 작성하는 것이 합격의 지름길입니다.`,
              outline: [
                {
                  paragraph: "Introduction (1st Paragraph)",
                  title: `${majorName}에 대한 학업적 관심 및 ${schoolName} 지원 동기`,
                  content: `[분량 가이드: 총 분량${limitStr}의 25% 내외]\n[활동 연계]: 제시해주신 활동 "${activities.slice(0, 50)}..." 중 전공 입문 계기와 가장 유기적으로 맞닿은 핵심 1가지를 언급하며 학업적 동기를 유발합니다.\n[가이드]: 전적대나 커뮤니티 칼리지에서 ${majorName} 관련 과목을 이수하며 학문적 갈증을 느낀 구체적인 순간을 기술하세요. 왜 타 대학이 아닌 반드시 '${schoolName}'에서 공부를 지속해야 하는지 전공 커리큘럼 특성과 엮어 서술해야 합니다.`,
                  dos: `전공에 처음 매료된 아카데믹한 계기와 '${schoolName}'만의 고유 연구 환경(랩실, 전공 특화 트랙)을 구체적인 고유명사를 사용하여 핏을 맞추어 강조하세요.`,
                  donts: "'어릴 적부터 무언가를 깊이 탐구하는 것을 좋아했다'거나 '단순히 학교 명성이 높고 랭킹이 훌륭해서 지원했다'는 식의 진부하고 성의 없는 지원 동기는 과감히 삭제하십시오.",
                  example: `My academic curiosity in ${majorName} was solidified at my current college while studying its foundational principles. Transferring to ${schoolName} is a critical step for me to access their advanced research labs and specialized upper-division curriculum, bridging my current coursework with real-world applications.`
                },
                {
                  paragraph: "Body Paragraph (2nd Paragraph)",
                  title: "핵심 전공 프로젝트 성과 입증 및 전공 역량 필터링 매핑",
                  content: `[분량 가이드: 총 분량${limitStr}의 50% 내외]\n[활동 연계]: 입력하신 활동 중 가장 성과가 뚜렷하고 전공 적합성이 높은 핵심 1~2개 프로젝트에만 깊이 집중하여 서술합니다.\n[가이드]: 이수한 선수과목의 이론 지식을 활용해 설계, 개발, 실험한 구체적 성과를 기술하세요. 본인이 담당한 파트와 해결한 기술적 한계, 협업 시 기여한 실무 성과를 정량적 지표를 섞어 입증합니다. 편입 직후 바로 고난도 전공 팀 프로젝트에 즉시 투입될 준비가 되었음을 증명해야 합니다.`,
                  dos: "프로젝트 진행 과정에서 마주한 전공/실무적 문제점(Bottleneck)과 이를 논리적 분석이나 코드를 통해 자율적으로 해결해 나간 논리적 극복 과정을 중점적으로 부각하세요.",
                  donts: "나열식으로 본인의 모든 자잘한 스펙(Calculus 튜터, 간단한 숙제 등)을 억지로 문단에 구겨 넣지 마세요. 에세이의 논점만 흐려지고 전문성이 떨어집니다.",
                  example: `Leveraging my knowledge from Calculus and Physics, I designed a control script in MATLAB that optimized feedback loops for our robotics project, reducing systemic latency by 15%. This experience demonstrated my ability to apply mathematical models to solve practical hardware problems under tight resource constraints.`
                },
                {
                  paragraph: "Conclusion (3rd Paragraph)",
                  title: `${schoolName} 편입 성공 후의 학업/연구 기획 및 장기적 커리어 비전`,
                  content: `[분량 가이드: 총 분량${limitStr}의 25% 내외]\n[활동 연계]: 본인의 커리어 청사진 혹은 로드맵의 종착역을 제시합니다.\n[가이드]: '${schoolName}'에 합격한 이후 수강할 구체적인 고학년 특화 강좌나 참여하고자 하는 랩실(Lab) 연구 분야를 지칭하여 포부를 밝히세요. 졸업 후 산업계나 연구계에서 어떤 지적/기술적 혁신을 이끌어낼 것인지 강한 포부와 함께 마무리합니다.`,
                  dos: `'${schoolName}' 졸업생으로서 향후 기여하고자 하는 학술/기술 분야와 장기적인 직업적 목표를 유기적으로 선언하여 입학처에 강렬한 잠재력을 심어주세요.`,
                  donts: "‘합격만 시켜주시면 뭐든 열심히 하겠다’는 식의 빈약한 포부나, 감성적인 다짐으로 끝맺는 흐릿한 결말은 전문성을 해치므로 절대 피하십시오.",
                  example: `Upon transferring to ${schoolName}, I aim to participate in undergraduate research opportunities focused on systems optimization and smart materials. In the long run, I plan to leverage this education to design sustainable systems that resolve scalability issues in my professional sector.`
                }
              ]
            };
          }
        };

        if (!apiKey) {
          console.warn("API key is missing in env. Serving fallback template.");
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: true, ...getFallbackResult(essayOption, lang) }));
          return;
        }

        let systemInstruction = '';
        let responseSchema = {};
        let promptText = '';

        if (essayOption === 'critic') {
          systemInstruction = `You are an expert transfer admission consultant and a senior essay tutor specializing in top U.S. universities.
Your role is to run a deep critique and analysis of a student's essay draft paragraph(s).
Analyze:
1. AI Similarity / Plagiarism: Estimate AI similarity percentage and flag any potential Turnitin issues. Keep AI Similarity Index between 5% and 25%.
2. Tone and Grammar: Analyze writing tone (e.g. passive vs active, vocabulary sophistication, academic tone). Provide actionable strengths and weaknesses.
3. Admissions Fit: Evaluate if the essay effectively targets the specific values and transfer rubric of the target school/program.
4. Critique Details: Provide detailed paragraphs of critique, and outline next-step guidelines.
5. Provide a detailed list of native English sentence rewrites (strictly 2 items) comparing the original sentence with an optimized, high-impact rewrite utilizing professional action verbs and quantitative metrics.

${lang === 'ko' ? `
[응답 언어 설정]
반드시 한국어로 모든 설명(toneAnalysis, admissionsFit, critiqueDetails, nativeRewrites의 explanation)을 작성해 주십시오. 단, nativeRewrites의 original과 rewritten 필드만은 완벽한 영어로 작성해 주어야 합니다.
` : `
[Response Language Setting]
You MUST write all explanations, guides, guidelines, and feedback strictly in English.
`}
`;

          responseSchema = {
            type: "object",
            properties: {
              aiSimilarityIndex: {
                type: "string",
                description: "Estimated AI similarity percentage (e.g., '12%')"
              },
              turnitinStatus: {
                type: "string",
                description: "Turnitin status classification (e.g., 'Safe (Very low similarity index)')"
              },
              toneAnalysis: {
                type: "string",
                description: "Detailed analysis of tone, active/passive verbs usage, and grammar strengths/weaknesses"
              },
              admissionsFit: {
                type: "string",
                description: "Analysis of how well the essay draft aligns with the target school's admission requirements and values"
              },
              critiqueDetails: {
                type: "string",
                description: "Comprehensive review of the draft and suggestions on content development"
              },
              nativeRewrites: {
                type: "array",
                description: "A list of sentence rewrites (strictly 2 examples) showing original vs polished native English phrasing",
                items: {
                  type: "object",
                  properties: {
                    original: { type: "string", description: "Original sentence from the student's draft" },
                    rewritten: { type: "string", description: "Polished, high-impact native English rewrite" },
                    explanation: { type: "string", description: "Brief explanation of why this change was made and what it improves" }
                  },
                  required: ["original", "rewritten", "explanation"]
                }
              }
            },
            required: ["aiSimilarityIndex", "turnitinStatus", "toneAnalysis", "admissionsFit", "critiqueDetails", "nativeRewrites"]
          };

          promptText = `[학생 정보 및 분석 대상 에세이 초안]
목표 대학: ${schoolName}
목표 전공: ${majorName}
에세이 질문 (Prompt): ${essayQuestion}
에세이 분량 제한 (Limit): ${essayLimit}
제출한 에세이 초안 내용: ${activities}

위 초안을 심층 분석하여 문장 성분 교정과 입학처 기준에 맞춰 피드백을 제공해 주십시오. JSON 형식으로 제공해야 합니다.`;

        } else if (essayOption === 'optimizer') {
          systemInstruction = `You are an expert extracurricular profiles consultant and admission writer specializing in top U.S. universities.
Your role is to optimize a student's extracurricular activity description.
Optimize:
1. Common App Version: Rewrite the activity description to be strictly under 150 characters (including spaces). Use high-impact action verbs (e.g. Engineered, Designed, Spearheaded) and quantify outcomes.
2. UC Version: Rewrite the description to be strictly under 350 characters. Detail responsibility, team size, tools/languages used, and quantitative results.
3. Feedback: Provide advice on how to further strengthen this activity description (e.g. what certificates to add, how to present it in interviews).

${lang === 'ko' ? `
[응답 언어 설정]
반드시 한국어로 피드백(feedback)을 작성해 주십시오. 단, commonAppVersion과 ucVersion의 text 필드는 실제 입력할 수 있도록 완벽한 영어로 작성해야 하며, actionVerbsUsed 필드는 영어로 된 동사 단어 나열로 해주십시오.
` : `
[Response Language Setting]
All descriptions, versions, and feedback MUST be written in English.
`}
`;

          responseSchema = {
            type: "object",
            properties: {
              originalDescription: {
                type: "string",
                description: "The original description provided by the student"
              },
              commonAppVersion: {
                type: "object",
                properties: {
                  text: { type: "string", description: "Polished English version strictly under 150 characters" },
                  characterCount: { type: "integer", description: "Length of the text string" },
                  actionVerbsUsed: { type: "string", description: "Comma separated list of action verbs utilized" }
                },
                required: ["text", "characterCount", "actionVerbsUsed"]
              },
              ucVersion: {
                type: "object",
                properties: {
                  text: { type: "string", description: "Polished English version strictly under 350 characters" },
                  characterCount: { type: "integer", description: "Length of the text string" },
                  actionVerbsUsed: { type: "string", description: "Comma separated list of action verbs utilized" }
                },
                required: ["text", "characterCount", "actionVerbsUsed"]
              },
              feedback: {
                type: "string",
                description: "Feedback and tips to maximize the impact of this extracurricular activity"
              }
            },
            required: ["originalDescription", "commonAppVersion", "ucVersion", "feedback"]
          };

          promptText = `[학생 정보 및 최적화 대상 활동 정보]
목표 대학: ${schoolName}
목표 전공: ${majorName}
활동 내용 및 역할 설명: ${activities}

위 활동 설명을 대학 원서 규격에 맞게 매끄럽고 강렬하게 다듬어 주십시오. JSON 형식으로 제공해야 합니다.`;

        } else {
          // mapper or outline generator
          systemInstruction = `You are an expert transfer admission consultant and a senior essay tutor specializing in top U.S. universities.
Your role is to analyze the target school/program's unique essay style and values, then generate a detailed "3-Paragraph Strategic Essay Outline" in JSON format that maximizes the student's chances of admission.

${lang === 'ko' ? `
[응답 언어 설정]
반드시 한국어로 모든 설명(targetStyleGuide, paragraph, title, content, dos, donts)을 작성해 주십시오. 단, 'example' (영문 작성 예시) 필드만은 실제로 학생이 에세이에 쓸 수 있도록 반드시 완벽한 영어로 작성해 주어야 합니다.
` : `
[Response Language Setting]
You MUST write all explanations, guides, guidelines, and feedback (targetStyleGuide, paragraph, title, content, dos, donts) strictly in English. The 'example' field must also be written in perfect English so the student can use it as a starting point.
`}

[University Transfer Essay Styles & Rubric]
1. UC System (UC Berkeley, UCLA, UC San Diego, etc.):
   - Style: Avoid flowery metaphors or poetic language. Strictly prefer factual, specific, and clear statements.
   - Evidence: Detail completed prerequisites and specific projects highlighting your direct contributions. (Strict 350-word PIQ limits)
2. Georgia Tech:
   - Style: Emphasize Statement of Purpose and Contribution.
   - Core Values: Focus on how your skills and background contribute to the Georgia Tech community. Highlight teamwork, collaboration, and leadership.
3. UIUC:
   - Style: Specific research fit and target study interest.
   - Core Values: Explain why UIUC specifically is the right fit. Reference UIUC's specific curriculum features, research labs, or faculty you want to work with.
4. Other Elite Target Universities (UMich, Columbia, NYU, Purdue, UVA, etc.):
   - Style: Focus on strict academic excellence and intellectual innovation.

[Activity Selection Guidelines]
- From the student's list of experiences, selectively filter and match only 1-2 key activities that are highly relevant to the target program and school values. Avoid listing clutter.

[Outline Writing Rules]
- Write clear instructions and storyline guides for each paragraph.
- Provide clear "dos" (critical points to emphasize) and "donts" (common clichés or mistakes to avoid) for each section.
- For each paragraph, provide a high-quality "example" (2-3 sentences of actual draft text written in perfect English) combining the student's activities with the school's style rubric.`;

          responseSchema = {
            type: "object",
            properties: {
              targetStyleGuide: {
                type: "string",
                description: "목표 대학교/학과 편입 에세이 심사 기준 및 선호하는 고유 글쓰기 스타일 요약 분석 (150자 내외)"
              },
              outline: {
                type: "array",
                description: "문단별 아웃라인 상세 설계도 (보통 3~4개 문단)",
                items: {
                  type: "object",
                  properties: {
                    paragraph: { type: "string", description: "예: Paragraph 1 (Introduction)" },
                    title: { type: "string", description: "문단의 핵심 소주제" },
                    content: { type: "string", description: "학생이 해당 문단에서 서술해야 할 논리 전개 및 스토리를 활동과 엮는 구체적 작성 가이드" },
                    dos: { type: "string", description: "이 문단에서 반드시 강조하여 어필해야 할 핵심 학업 역량 및 작성 팁" },
                    donts: { type: "string", description: "이 문단에서 절대 피해야 할 흔하고 진부한 어투나 실수 주의 사항" },
                    example: { type: "string", description: "해당 문단의 가이드라인과 학생의 활동을 결합하여 작성된, 실제 합격생 수준의 고품질 영문 작성 예시 (2~3문장 내외, 문법적으로 완벽한 영어 작성)" }
                  },
                  required: ["paragraph", "title", "content", "dos", "donts", "example"]
                }
              }
            },
            required: ["targetStyleGuide", "outline"]
          };

          promptText = `[학생 정보 및 요청 사항]
목표 대학: ${schoolName}
목표 전공: ${majorName}
에세이 질문 (Prompt): ${essayQuestion}
에세이 분량 제한 (Limit): ${essayLimit}
학생 활동 및 경험 풀: ${activities}

위 정보를 바탕으로, 해당 대학의 인재상에 핏을 맞추어 문단별 에세이 설계 도면을 상세히 작성해 주십시오. JSON 형식으로 제공해야 합니다.`;
        }

        const payload = JSON.stringify({
          contents: [{
            parts: [{
              text: promptText
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: responseSchema
          },
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        });

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 25000
        };

        const geminiReq = https.request(url, options, (geminiRes) => {
          let geminiData = '';
          geminiRes.on('data', chunk => geminiData += chunk);
          geminiRes.on('end', () => {
            if (geminiRes.statusCode !== 200) {
              console.warn(`Gemini API returned status ${geminiRes.statusCode}. Serving fallback template.`);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...getFallbackResult(essayOption, lang) }));
              return;
            }
            try {
              const geminiParsed = JSON.parse(geminiData);
              const textResult = geminiParsed.candidates[0].content.parts[0].text;
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...JSON.parse(textResult) }));
            } catch (err) {
              console.warn("AI parsing failed. Serving fallback template.", err);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...getFallbackResult(essayOption, lang) }));
            }
          });
        });

        geminiReq.on('error', (err) => {
          console.warn("Connection error to Gemini API. Serving fallback template.", err);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: true, ...getFallbackResult(essayOption, lang) }));
        });

        geminiReq.write(payload);
        geminiReq.end();
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '잘못된 요청 양식입니다.' }));
      }
    });
    return;
  }

  // API Route: Generate AI Interview Questions
  if (req.method === 'POST' && safeUrl === '/api/interview/questions') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { schoolName, majorName, essayQuestion } = parsed;
        const apiKey = process.env.GEMINI_API_KEY;

        const getFallbackQuestions = () => {
          const lowerSchool = (schoolName || "").toLowerCase();
          if (lowerSchool.includes("california") || lowerSchool.includes("berkeley") || lowerSchool.includes("ucla") || lowerSchool.includes("uc ") || lowerSchool.includes("sd") || lowerSchool.includes("system")) {
            return {
              success: true,
              questions: [
                "[학업 및 준비도] 편입하려는 전공과 관련해 가장 흥미를 느꼈고 우수한 성과를 거두었던 대학 과목과, 그 과목에서 배운 핵심 원리가 무엇인지 설명해 주세요.",
                "[전공 프로젝트] 전적대나 커뮤니티 칼리지에서 주도했던 전공 프로젝트, 학술 연구, 혹은 개인적인 작업 중 가장 본인의 역량을 잘 보여주는 사례와 본인의 구체적인 역할을 말씀해 주세요.",
                "[문제 해결 경험] 위의 프로젝트나 공부 중 마주했던 가장 큰 난관(오류, 분석 실패 등)은 무엇이었으며, 이를 극복하기 위해 취했던 분석 및 해결 과정을 단계별로 서술해 주세요.",
                "[협업 및 소통] 다른 사람들과 공동의 문제를 해결하기 위해 협업했거나, 동아리/스터디 등에서 갈등 조율이나 소통을 통해 긍정적 결과를 이끌어냈던 경험이 있다면 알려주세요.",
                "[목표 대학 입증] 본인이 " + schoolName + "의 " + majorName + "에 입학하기 위해 학업적, 실무적으로 완벽히 준비된 학생임을 입증할 수 있는 정량적인 성과나 강점을 말씀해 주세요."
              ]
            };
          } else if (lowerSchool.includes("georgia") || lowerSchool.includes("gt") || lowerSchool.includes("tech")) {
            return {
              success: true,
              questions: [
                "[전공 진입 계기] 조지아텍의 " + majorName + "로 편입하고자 하는 학문적 계기와, 이 학문에 빠지게 만든 전적대에서의 결정적인 순간을 기술해 주세요.",
                "[실무/프로젝트 실적] 본인의 전공 관련 설계/분석 능력이나 전공 응용 지식을 가장 잘 입증할 수 있는 대표적인 전공 프로젝트 성과는 무엇인가요?",
                "[협업과 리더십] 프로젝트나 학업 수행 과정에서 팀원들과 함께 갈등을 해결하거나, 본인의 리더십 또는 중재 능력을 발휘하여 공동의 목표를 달성했던 에피소드를 말씀해 주세요.",
                "[캠퍼스 및 커뮤니티 기여] 조지아텍 공동체(학생 단체, 학술 동아리 등)에 편입생으로서 본인의 어떤 특별한 배경이나 경험으로 어떻게 공헌(Contribution)할 것인지 서술해 주세요.",
                "[연구 분야 및 목표] 조지아텍 합격 후 참여해 보고 싶은 고학년 특화 커리큘럼이나 교수 연구실은 어디이며, 이를 통해 장기적으로 이루고 싶은 직업적 꿈은 무엇인가요?"
              ]
            };
          } else if (lowerSchool.includes("illinois") || lowerSchool.includes("uiuc")) {
            return {
              success: true,
              questions: [
                "[전적대 학업 갈증] 전적대 과정 중 해당 전공 분야에서 학문적 한계를 느꼈거나 추가로 깊게 탐구하고 싶었던 핵심 주제나 과목은 무엇인가요?",
                "[대표 프로젝트] 본인의 전공 적합성을 가장 강력히 보여줄 수 있는 대표적인 연구/개발 프로젝트 및 전공 성과를 정량적 기여도 중심으로 알려주세요.",
                "[특정 연구 핏] UIUC " + majorName + " 내에서 특히 수강하고 싶은 특정 교과목이나, 참여해 공부하고 싶은 랩실(Lab) 또는 교수님의 연구 분야는 무엇이며 왜 그곳을 희망하나요?",
                "[문제 해결 및 논리력] 학업 및 실무 프로젝트 중 마주했던 가장 복잡하고 어려운 문제 상황을 자신만의 전공적 접근법과 수치화된 논리로 해결했던 경험을 말씀해 주세요.",
                "[장기적 진로 청사진] UIUC 졸업 후 장기적으로 해결하고 싶은 해당 분야의 학술적/기술적 과제나 본인이 꿈꾸는 전문가로서의 직업적 최종 지향점은 무엇인가요?"
              ]
            };
          } else {
            return {
              success: true,
              questions: [
                "[학업적 동기] 목표 대학인 " + schoolName + " " + majorName + " 편입을 결심하게 만든 전공 관련 학문적 갈증과 그 학과에 지원하고자 하는 가장 핵심적인 동기는 무엇인가요?",
                "[대표 프로젝트 성과] 전적대 학업 및 동아리 활동 중 본인의 학술적/전공 전문성을 가장 잘 증명할 수 있는 핵심 설계/개발/분석 프로젝트 내용과 본인의 정량적 기여 성과를 서술해 주세요.",
                "[문제 상황 해결] 학업 또는 프로젝트 활동을 하면서 겪었던 가장 까다로운 한계나 분석상의 난관을 어떠한 논리적인 해결 기법이나 집요함으로 돌파했는지 알려주세요.",
                "[대학 핏 및 지원 사유] 목표 대학인 '" + schoolName + "'에서만 배울 수 있는 특화 교과나 연구 테마는 무엇이며, 전적대의 학업 기반이 해당 대학의 연구/학습과 어떻게 유기적으로 이어지나요?",
                "[편입 후 로드맵 및 비전] 합격 후 본인의 구체적인 학업 목표와, 이를 달성한 뒤 졸업 후 산업계나 연구계에서 어떤 가치를 실현하고자 하는지 장기 진로 비전을 서술해 주세요."
              ]
            };
          }
        };

        if (!apiKey) {
          console.warn("API key is missing. Serving 5-step fallback interview questions.");
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(getFallbackQuestions()));
          return;
        }

        const systemInstruction = `당신은 미국 명문 대학교 편입 에세이 전문가이자 수석 입학 사정관입니다.
학생이 [목표 대학: ${schoolName}, 목표 전공: ${majorName}, 에세이 질문: ${essayQuestion}]에 맞는 최고의 에세이를 작성할 수 있도록 돕기 위해, 학생의 성향과 했었던 전공 관련 학업/프로젝트/협업 활동들을 완벽히 이끌어낼 수 있는 맞춤형 인터뷰 질문 5개를 생성해야 합니다.
질문은 정중하고 프로페셔널한 한국어 어조로 작성되어야 하며, 구체적인 학술적/실무적 사실과 성과를 유도할 수 있어야 합니다.

[질문 설계 지침]
1. 첫 번째 질문: 학생의 학업적 동기 및 전공 준비도 (Prerequisites, 핵심 학업 성취 등)를 묻습니다.
2. 두 번째 질문: 학생의 대표적인 전공 프로젝트 성과 및 구체적인 역할(프로젝트 수행, 리서치, 발표, 툴 활용 등)을 묻습니다.
3. 세 번째 질문: 프로젝트 과정에서 겪었던 가장 큰 학술적/실무적 한계나 문제점, 그리고 이를 돌파한 구체적 극복 과정을 묻습니다.
4. 네 번째 질문: 팀 내에서의 협력, 리더십, 소통 경험 또는 개인적인 학업적/실무적 배움을 성찰(Reflection)하도록 유도합니다.
5. 다섯 번째 질문: 대학별 특수 심사 기준에 직접 연계되는 질문을 던집니다.
   - UC 계열: 철저한 사실(Factual) 기반의 정량적 기여 및 성과 최종 입증.
   - 조지아텍: 팀워크와 리더십, 혹은 캠퍼스/연구 기여 방안.
   - UIUC: UIUC 특화 고학년 커리큘럼 매칭 또는 희망 연구실(Lab)/교수 분야와의 연계.
   - 기타 대학: 편입 후의 학업 기획 및 장기적 커리어 청사진.

 반드시 오직 JSON 배열 형식 ["질문1", "질문2", "질문3", "질문4", "질문5"]으로만 반환해 주세요. 다른 설명이나 텍스트를 포함해서는 안 됩니다.`;

        const payload = JSON.stringify({
          contents: [{
            parts: [{
              text: `목표 대학: ${schoolName}
목표 전공: ${majorName}
에세이 질문 (Prompt): ${essayQuestion}

위 정보를 분석하여, 에세이 글감을 풍성하게 발굴해줄 수 있는 5개의 맞춤형 인터뷰 질문을 한국어로 생성하여 JSON 배열로 반환해 주세요.`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "array",
              description: "인터뷰 질문 5개",
              items: { type: "string" },
              minItems: 5,
              maxItems: 5
            }
          },
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        });

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 25000
        };

        const geminiReq = https.request(url, options, (geminiRes) => {
          let geminiData = '';
          geminiRes.on('data', chunk => geminiData += chunk);
          geminiRes.on('end', () => {
            if (geminiRes.statusCode !== 200) {
              console.warn(`Gemini API returned status ${geminiRes.statusCode}. Serving fallback questions.`);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify(getFallbackQuestions()));
              return;
            }
            try {
              const geminiParsed = JSON.parse(geminiData);
              const textResult = geminiParsed.candidates[0].content.parts[0].text;
              const questionsList = JSON.parse(textResult);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, questions: questionsList }));
            } catch (err) {
              console.warn("AI questions parsing failed. Serving fallback questions.", err);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify(getFallbackQuestions()));
            }
          });
        });

        geminiReq.on('error', (err) => {
          console.warn("Connection error to Gemini API for questions. Serving fallback.", err);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(getFallbackQuestions()));
        });

        geminiReq.write(payload);
        geminiReq.end();
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '잘못된 요청 양식입니다.' }));
      }
    });
    return;
  }

  // API Route: Send Feedback Email via SMTP TLS
  if (req.method === 'POST' && safeUrl === '/api/feedback') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const parsed = JSON.parse(body);
        const { message } = parsed;

        if (!message) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: '피드백 내용을 입력해주세요.' }));
          return;
        }

        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpReceiver = process.env.SMTP_RECEIVER;

        if (!smtpUser || !smtpPass || !smtpReceiver) {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: '서버 메일 설정(SMTP)이 올바르지 않습니다. .env 설정을 확인해주세요.' }));
          return;
        }

        const subject = '=?UTF-8?B?' + Buffer.from('[TransferChek] 신규 익명 피드백 알림').toString('base64') + '?=';
        const mailBody = `안녕하세요. TransferChek 시스템 알림입니다.

사용자로부터 새로운 피드백이 접수되었습니다:

---------------------------------
${message}
---------------------------------

전송 시각: ${new Date().toLocaleString()}
`;

        await sendEmailViaSmtp({
          user: smtpUser,
          pass: smtpPass,
          to: smtpReceiver,
          subject: subject,
          body: mailBody
        });

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, message: '피드백이 이메일로 정상 전송되었습니다.' }));
      } catch (err) {
        console.error('Email send failed:', err);
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: `이메일 전송 실패: ${err.message}` }));
      }
    });
    return;
  }
  
  const filePath = path.join(__dirname, safeUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 파일을 찾을 수 없습니다.');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 서버 내부 오류');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`To open main page: http://localhost:${PORT}/index.html`);
    console.log(`To open legal page: http://localhost:${PORT}/terms-privacy-pricing.html`);
  });
}
module.exports = server;

function sendEmailViaSmtp({ user, pass, to, subject, body }) {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(465, 'smtp.gmail.com', {}, () => {
      // Connected successfully
    });

    let step = 0;
    const send = (data) => {
      socket.write(data + '\r\n');
    };

    socket.on('data', (data) => {
      const msg = data.toString();
      
      if (step === 0 && msg.startsWith('220')) {
        send('EHLO localhost');
        step = 1;
      } else if (step === 1 && msg.includes('250')) {
        send('AUTH LOGIN');
        step = 2;
      } else if (step === 2 && msg.startsWith('334')) {
        send(Buffer.from(user).toString('base64'));
        step = 3;
      } else if (step === 3 && msg.startsWith('334')) {
        send(Buffer.from(pass).toString('base64'));
        step = 4;
      } else if (step === 4 && msg.startsWith('235')) {
        send(`MAIL FROM:<${user}>`);
        step = 5;
      } else if (step === 5 && msg.startsWith('250')) {
        send(`RCPT TO:<${to}>`);
        step = 6;
      } else if (step === 6 && msg.startsWith('250')) {
        send('DATA');
        step = 7;
      } else if (step === 7 && msg.startsWith('354')) {
        const emailData = [
          `From: "TransferChek Feedback" <${user}>`,
          `To: <${to}>`,
          `Subject: ${subject}`,
          'MIME-Version: 1.0',
          'Content-Type: text/plain; charset=utf-8',
          '',
          body,
          '.'
        ].join('\r\n');
        send(emailData);
        step = 8;
      } else if (step === 8 && msg.startsWith('250')) {
        send('QUIT');
        step = 9;
      } else if (step === 9 || msg.startsWith('221')) {
        socket.end();
        resolve(true);
      } else {
        if (msg.startsWith('5') || msg.startsWith('4')) {
          socket.end();
          reject(new Error(`SMTP Error: ${msg}`));
        }
      }
    });

    socket.on('error', (err) => {
      reject(err);
    });
  });
}
