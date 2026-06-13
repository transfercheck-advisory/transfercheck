const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

console.log(`🔍 Starting Database Cross-Verification on ${dbPath}...`);

if (!fs.existsSync(dbPath)) {
  console.error("❌ Critical: transfer-data.js does not exist!");
  process.exit(1);
}

// 1. Syntax Check
const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);

try {
  vm.runInContext(dbContent, sandbox);
  console.log("✅ Syntax Check: transfer-data.js loaded and evaluated successfully in sandbox context.");
} catch (e) {
  console.error("❌ Critical Syntax Error: Failed to parse transfer-data.js!");
  console.error(e);
  process.exit(1);
}

const db = sandbox.window.transferDatabase;
if (!db || !db.schools) {
  console.error("❌ Critical Structure Error: transferDatabase or schools list is missing.");
  process.exit(1);
}

let criticalErrors = 0;
let warnings = 0;

console.log(`📊 Loaded ${db.schools.length} schools and ${db.schools.flatMap(s => s.majors || []).length} majors.`);
console.log(`--------------------------------------------------`);

const seenMajorIds = new Set();

db.schools.forEach((school, sIdx) => {
  if (!school.name || typeof school.name !== 'string') {
    console.error(`❌ Critical: School at index ${sIdx} is missing a name.`);
    criticalErrors++;
  }
  if (!school.id || typeof school.id !== 'string') {
    console.error(`❌ Critical: School "${school.name}" is missing a unique ID.`);
    criticalErrors++;
  }

  const majors = school.majors || [];
  majors.forEach((major, mIdx) => {
    const majorPath = `${school.name} -> ${major.name || 'Unnamed'}`;

    // Unique ID check
    if (!major.id) {
      console.error(`❌ Critical [${majorPath}]: Major is missing ID.`);
      criticalErrors++;
    } else {
      if (seenMajorIds.has(major.id)) {
        console.error(`❌ Critical [${majorPath}]: Duplicate Major ID detected: "${major.id}".`);
        criticalErrors++;
      }
      seenMajorIds.add(major.id);
    }

    // Required fields check
    if (!major.name) {
      console.error(`❌ Critical [${majorPath}]: Major name is empty.`);
      criticalErrors++;
    }

    // GPA validation
    if (major.minGpa !== null && major.minGpa !== undefined) {
      if (typeof major.minGpa !== 'number' || isNaN(major.minGpa)) {
        console.error(`❌ Critical [${majorPath}]: minGpa must be a number or null.`);
        criticalErrors++;
      } else if (major.minGpa < 0 || major.minGpa > 4.0) {
        console.error(`❌ Critical [${majorPath}]: minGpa (${major.minGpa}) is out of bounds (0-4.0).`);
        criticalErrors++;
      }
    }

    // Credits validation
    if (major.minCredits !== null && major.minCredits !== undefined) {
      if (typeof major.minCredits !== 'number' || isNaN(major.minCredits)) {
        console.error(`❌ Critical [${majorPath}]: minCredits must be a number or null.`);
        criticalErrors++;
      } else if (major.minCredits < 0 || major.minCredits > 120) {
        console.error(`❌ Critical [${majorPath}]: minCredits (${major.minCredits}) is out of bounds (0-120).`);
        criticalErrors++;
      }
    }

    // Courses validation
    if (!Array.isArray(major.requiredCourses)) {
      console.error(`❌ Critical [${majorPath}]: requiredCourses must be an array.`);
      criticalErrors++;
    } else {
      major.requiredCourses.forEach((course, cIdx) => {
        if (typeof course !== 'string') {
          console.error(`❌ Critical [${majorPath}]: requiredCourse at index ${cIdx} is not a string.`);
          criticalErrors++;
        }
      });
    }

    if (!Array.isArray(major.recommendedCourses)) {
      console.error(`❌ Critical [${majorPath}]: recommendedCourses must be an array.`);
      criticalErrors++;
    }

    // English requirements validation
    const eng = major.english || {};
    if (eng.TOEFL !== null && eng.TOEFL !== undefined) {
      if (eng.TOEFL < 0 || eng.TOEFL > 120) {
        console.warn(`⚠️ Warning [${majorPath}]: TOEFL score (${eng.TOEFL}) is suspicious.`);
        warnings++;
      }
    }
    if (eng.IELTS !== null && eng.IELTS !== undefined) {
      if (eng.IELTS < 0 || eng.IELTS > 9) {
        console.warn(`⚠️ Warning [${majorPath}]: IELTS score (${eng.IELTS}) is suspicious.`);
        warnings++;
      }
    }
    if (eng.Duolingo !== null && eng.Duolingo !== undefined) {
      if (eng.Duolingo < 0 || eng.Duolingo > 160) {
        console.warn(`⚠️ Warning [${majorPath}]: Duolingo score (${eng.Duolingo}) is suspicious.`);
        warnings++;
      }
    }

    // Check rawOfficialText
    if (major.rawOfficialText !== undefined) {
      if (typeof major.rawOfficialText !== 'string') {
        console.error(`❌ Critical [${majorPath}]: rawOfficialText must be a string.`);
        criticalErrors++;
      } else if (major.rawOfficialText.trim() === '') {
        console.warn(`⚠️ Warning [${majorPath}]: rawOfficialText is empty string.`);
        warnings++;
      }
    }
  });
});

console.log(`--------------------------------------------------`);
console.log(`🏁 Verification finished with:`);
console.log(`   - Critical Errors: ${criticalErrors}`);
console.log(`   - Warnings: ${warnings}`);

if (criticalErrors > 0) {
  console.error("❌ Verification Failed: Please resolve all critical errors before deploying!");
  process.exit(1);
} else {
  console.log("✅ Verification Passed: Database structure is clean and valid!");
  process.exit(0);
}
