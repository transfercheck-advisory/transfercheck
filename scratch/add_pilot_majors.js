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

const uw = database.schools.find(s => s.id === "university-of-washington-2fde0bf4");
const umich = database.schools.find(s => s.id === "university-of-michigan-cc40378b");

if (!uw || !umich) {
  console.error("❌ Failed to find UW or UMich in database.");
  process.exit(1);
}

// 1. Add UW Business Administration
const uwMajorId = "university-of-washington-business-administration-pilot";
if (!uw.majors.some(m => m.id === uwMajorId)) {
  uw.majors.push({
    "id": uwMajorId,
    "name": "Business Administration (Foster School of Business)",
    "rawMinGpa": "Not evaluated yet",
    "rawMinCredits": "Not evaluated yet",
    "minGpa": null,
    "minCredits": null,
    "requiredCourses": [],
    "recommendedCourses": [],
    "rawRequired": "",
    "rawRecommended": "",
    "english": {
      "raw": "",
      "TOEFL": null,
      "TOEFL_2026": null,
      "IELTS": null,
      "Duolingo": null
    },
    "note": "Source: https://admit.washington.edu/majors/business-administration/",
    "confidence": "needs_source_check"
  });
  console.log("✅ Added UW Business Administration skeleton.");
} else {
  console.log("ℹ️ UW Business Administration already exists.");
}

// 2. Add UMich Economics
const umichMajorId = "university-of-michigan-economics-pilot";
if (!umich.majors.some(m => m.id === umichMajorId)) {
  umich.majors.push({
    "id": umichMajorId,
    "name": "Economics (LSA)",
    "rawMinGpa": "Not evaluated yet",
    "rawMinCredits": "Not evaluated yet",
    "minGpa": null,
    "minCredits": null,
    "requiredCourses": [],
    "recommendedCourses": [],
    "rawRequired": "",
    "rawRecommended": "",
    "english": {
      "raw": "",
      "TOEFL": null,
      "TOEFL_2026": null,
      "IELTS": null,
      "Duolingo": null
    },
    "note": "Source: https://lsa.umich.edu/econ/undergraduates/major.html",
    "confidence": "needs_source_check"
  });
  console.log("✅ Added UMich Economics skeleton.");
} else {
  console.log("ℹ️ UMich Economics already exists.");
}

// Update program count
database.programCount = database.schools.flatMap(s => s.majors).length;

const updatedJs = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
fs.writeFileSync(dbPath, updatedJs, 'utf8');
console.log("💾 Saved database state to transfer-data.js.");
