const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

console.log("📂 Loading database...");
const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbContent, sandbox);
const database = sandbox.window.transferDatabase;

const umich = database.schools.find(s => s.id === "university-of-michigan-cc40378b");
const major = umich.majors.find(m => m.id === "university-of-michigan-economics-pilot");

if (major) {
  major.rawMinGpa = "3.0 minimum GPA (competitive recommended GPA: 3.5)";
  major.rawMinCredits = "24 transferable credits (preference for 55+ junior standing credits)";
  major.minGpa = 3.0;
  major.minCredits = 24;
  major.requiredCourses = [
    "ECON 101 - Principles of Economics I (Microeconomics)",
    "ECON 102 - Principles of Economics II (Macroeconomics)",
    "MATH 115 - Calculus I"
  ];
  major.recommendedCourses = [];
  major.rawRequired = "ECON 101 - Principles of Economics I (Microeconomics)\nECON 102 - Principles of Economics II (Macroeconomics)\nMATH 115 - Calculus I";
  major.english = {
    "raw": "TOEFL iBT: 100+ (Listening/Reading 23+, Speaking/Writing 21+) | IELTS: 7.0+ (section scores 6.5+) | Duolingo DET: NOT accepted",
    "TOEFL": 100,
    "TOEFL_2026": null,
    "IELTS": 7,
    "Duolingo": null
  };
  major.rawOfficialText = `To transfer into the Economics major at the University of Michigan (Ann Arbor), you must first be admitted to the College of Literature, Science, and the Arts (LSA).

Prerequisite Requirements:
To prepare for the Economics major, you are encouraged to complete the following three prerequisite courses before or shortly after transferring:
- ECON 101: Principles of Economics I (Microeconomics)
- ECON 102: Principles of Economics II (Macroeconomics)
- MATH 115: Calculus I

Academic Policies:
- Residency Requirement: You must complete a total of 12 economics credits in residence at the U-M Ann Arbor campus. This must include ECON 401, ECON 402, and one additional 400-level course.
- Admissions Competitiveness: Admissions are competitive, with preference given to students with junior standing (at least 55 transferable credit hours) and a strong record of academic achievement.`;
  major.officialSourceUrl = "https://lsa.umich.edu/econ/undergraduates/major.html";
  major.confidence = "verified";
  major.note = "Verified: Prerequisite requirements confirmed against the official U-M Economics Department undergraduate major guide (https://lsa.umich.edu/econ/undergraduates/major.html) and LSA Admissions.";
  
  console.log("✅ Populated UMich Economics pilot data.");
} else {
  console.error("❌ Major university-of-michigan-economics-pilot not found.");
}

const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
fs.writeFileSync(dbPath, updatedJs, 'utf8');
console.log("💾 Saved database state to transfer-data.js.");
