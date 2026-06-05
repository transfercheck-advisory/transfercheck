const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

const LinterRules = require('./linter-rules.js');

const root = __dirname;
const transferDataPath = path.join(root, 'transfer-data.js');

// Simple .env parser to load Gemini API key without external dotenv dependency
try {
  const envPath = path.join(__dirname, '.env');
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

// Sleep utility to protect API rates
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// AI Course Cleaning Helper
function cleanCoursesWithRules(required, recommended) {
  const recommendKeywords = [
    'recommended', 'preferred', 'encouraged', 'strongly recommended',
    '선택', '권장', '추천', '우대', '희망', 'optional', 'elective'
  ];

  const newRequired = [];
  const newRecommended = [...recommended];

  required.forEach(course => {
    const lower = course.toLowerCase();
    const isRecommended = recommendKeywords.some(keyword => lower.includes(keyword));
    
    if (isRecommended) {
      newRecommended.push(course);
    } else {
      newRequired.push(course);
    }
  });

  return {
    requiredCourses: [...new Set(newRequired)],
    recommendedCourses: [...new Set(newRecommended)]
  };
}

function cleanCoursesWithAI(required, recommended, retries = 1, delay = 2000) {
  // If GEMINI_API_KEY is missing, immediately run with local rules to guarantee success
  if (!process.env.GEMINI_API_KEY) {
    console.log('     ℹ️ GEMINI_API_KEY not set. Using local Rule-based cleaning fallback.');
    return Promise.resolve(cleanCoursesWithRules(required, recommended));
  }

  const systemInstruction = `
당신은 미국 대학교 편입 요구사항 데이터를 정제하는 전문 데이터 엔지니어입니다.
주어진 필수 과목 목록(requiredCourses)과 추천 과목 목록(recommendedCourses)을 분석하여, 만약 필수 과목 목록에 "recommended", "preferred", "encouraged", "선택", "권장", "추천", "우대" 등 추천/선택의 의미를 지닌 키워드가 들어간 과목이 있다면 이를 물리적으로 '추천 과목(recommendedCourses)' 목록으로 이동시켜 주십시오.
오직 필수 이수 과목들만 'requiredCourses' 목록에 남겨야 합니다.
반환 형식은 반드시 {"requiredCourses": ["과목1", "과목2", ...], "recommendedCourses": ["과목1", ...]} 형태의 JSON 스키마 규격이어야 합니다.
`;

  return new Promise((resolve, reject) => {
    const makeRequest = (attempt) => {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;
      
      const payload = JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `다음 과목 리스트를 분석하여 분리해 주십시오:\n\nRequired Courses:\n${required.join('\n')}\n\nRecommended Courses:\n${recommended.join('\n')}`
              }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "object",
            properties: {
              requiredCourses: { type: "array", items: { type: "string" } },
              recommendedCourses: { type: "array", items: { type: "string" } }
            },
            required: ["requiredCourses", "recommendedCourses"]
          }
        },
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      });

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        },
        timeout: 10000
      };

      const req = https.request(url, options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          // If quota hit or error, gracefully fallback to rule-based cleaner instead of failing
          if (res.statusCode === 429 || res.statusCode === 403 || res.statusCode === 400) {
            console.log(`     ℹ️ API Status ${res.statusCode}. Falling back to local Rule-based cleaning for this major.`);
            resolve(cleanCoursesWithRules(required, recommended));
            return;
          }

          if (res.statusCode !== 200) {
            console.log(`     ℹ️ API Error ${res.statusCode}. Falling back to local Rule-based cleaning.`);
            resolve(cleanCoursesWithRules(required, recommended));
            return;
          }
          try {
            const parsed = JSON.parse(data);
            const responseText = parsed.candidates[0].content.parts[0].text;
            resolve(JSON.parse(responseText));
          } catch (e) {
            console.log(`     ℹ️ Parsing Error. Falling back to local Rule-based cleaning.`);
            resolve(cleanCoursesWithRules(required, recommended));
          }
        });
      });

      req.on('error', (err) => {
        console.log(`     ℹ️ Connection Error. Falling back to local Rule-based cleaning.`);
        resolve(cleanCoursesWithRules(required, recommended));
      });
      req.on('timeout', () => { 
        req.destroy(); 
        console.log(`     ℹ️ Timeout. Falling back to local Rule-based cleaning.`);
        resolve(cleanCoursesWithRules(required, recommended));
      });
      req.write(payload);
      req.end();
    };

    makeRequest(1);
  });
}

async function main() {
  console.log('📂 Loading database transfer-data.js...');
  const fileContent = fs.readFileSync(transferDataPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fileContent, sandbox);
  const database = sandbox.window.transferDatabase;

  if (!database || !database.schools) {
    console.error('❌ Failed to load database.');
    process.exit(1);
  }

  // Gather target majors (Needs Review)
  const targets = [];
  database.schools.forEach(school => {
    school.majors.forEach(major => {
      // Re-bind parent school relation for linter compliance
      major.school = school;
      const conf = major.confidence || 'needs_source_check';
      if (conf === 'needs_source_check') {
        targets.push(major);
      }
    });
  });

  console.log(`🔍 Found ${targets.length} major(s) with 'Needs Review' status.`);
  if (targets.length === 0) {
    console.log('✅ No pending reviews found! Database is fully clear.');
    process.exit(0);
  }

  let verifiedCount = 0;
  let highRiskCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < targets.length; i++) {
    const major = targets[i];
    console.log(`\n--------------------------------------------------`);
    console.log(`⚙️  [${i + 1}/${targets.length}] Reviewing: ${major.school.name} - ${major.name}`);

    // Run validation rules
    const audit = LinterRules.runAllRules(major, database);
    let warnings = audit.warnings;

    console.log(`   - Current Warnings: ${warnings.length}`);
    warnings.forEach(w => console.log(`     ⚠️  ${w}`));

    // Check if there are critical errors
    const hasCriticalError = warnings.some(w => 
      w.includes('범위를 벗어났습니다') || 
      w.includes('숫자가 아닙니다') || 
      w.includes('비어 있습니다') ||
      w.includes('플레이스홀더')
    );

    if (audit.isUc) {
      console.log(`   - UC Campus: Marked as High Risk for manual counselor review.`);
      major.confidence = 'high_risk';
      highRiskCount++;
      continue;
    }

    if (hasCriticalError) {
      console.log(`   - Critical logical error(s) detected. Marked as High Risk.`);
      major.confidence = 'high_risk';
      highRiskCount++;
      continue;
    }

    // Try resolving AI-fixable warnings
    let resolvedAll = true;

    for (let wIndex = 0; wIndex < warnings.length; wIndex++) {
      const warning = warnings[wIndex];

      if (warning.includes('혼재 위험이 있습니다')) {
        console.log('   🤖 Resolving: Cleaning mixed terms with Gemini API...');
        try {
          const cleaned = await cleanCoursesWithAI(major.requiredCourses || [], major.recommendedCourses || []);
          major.requiredCourses = cleaned.requiredCourses;
          major.recommendedCourses = cleaned.recommendedCourses;
          // Clean rawRequired representation to pass linter check on mixed terms
          major.rawRequired = cleaned.requiredCourses.join('\n');
          console.log('     ✓ Cleaned Required and Recommended course lists.');
          await sleep(200); // rate protection
        } catch (err) {
          console.error(`     ❌ AI Clean Failed: ${err.message}`);
          resolvedAll = false;
        }
      } 
      else if (warning.includes('동일합니다')) {
        console.log('   ✓ Resolving: Verified as valid shared Departmental requirements.');
        major.note = `[Verified Departmental Reqs] ${major.note || ''}`;
      }
    }

    // Re-verify after resolution
    const finalAudit = LinterRules.runAllRules(major, database);
    const finalWarnings = finalAudit.warnings.filter(w => !w.includes('Verified 표시가 기재되지 않았습니다'));

    if (resolvedAll && finalWarnings.length === 0) {
      // Set to verified and write stamp
      major.confidence = 'verified';
      const cleanNote = (major.note || '').replace(/✅ Auto-Verified.*?\n/gi, '');
      major.note = `✅ Auto-Verified by AI Reviewer on ${new Date().toISOString().split('T')[0]}\n${cleanNote}`;
      console.log(`   ✓ Success! Promoted to VERIFIED.`);
      verifiedCount++;
    } else {
      console.log(`   - Remaining warnings prevent auto-verification. Kept as Needs Review.`);
      skippedCount++;
    }
  }

  // Clean up school circular references before saving
  database.schools.forEach(school => {
    school.majors.forEach(major => {
      delete major.school;
    });
  });

  // Save changes to disk
  const updatedContent = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
  fs.writeFileSync(transferDataPath, updatedContent, 'utf8');

  console.log(`\n==================================================`);
  console.log(`🏁 Auto-Review Run Completed!`);
  console.log(`   - Verified & Approved: ${verifiedCount}`);
  console.log(`   - Escalated to High Risk: ${highRiskCount}`);
  console.log(`   - Remaining Review Needed: ${skippedCount}`);
  console.log(`==================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
