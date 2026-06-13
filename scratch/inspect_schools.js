const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

if (!fs.existsSync(dbPath)) {
  console.error("❌ transfer-data.js does not exist!");
  process.exit(1);
}

const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
try {
  vm.runInContext(dbContent, sandbox);
} catch (e) {
  console.error("❌ Failed to parse transfer-data.js:", e);
  process.exit(1);
}

const transferDatabase = sandbox.window.transferDatabase;
if (!transferDatabase || !transferDatabase.schools) {
  console.error("❌ transferDatabase is not structured correctly!");
  process.exit(1);
}

const targetSchools = [
  "University of Notre Dame",
  "Vanderbilt University",
  "University of Maryland, College Park (UMD)",
  "Rutgers University"
];

targetSchools.forEach(schoolName => {
  const school = transferDatabase.schools.find(s => s.name === schoolName);
  if (!school) {
    console.log(`❌ School [${schoolName}] not found in database.`);
    return;
  }

  console.log(`\n========================================`);
  console.log(`🏫 School: ${school.name} (${school.shortName})`);
  console.log(`========================================`);
  console.log(`Total Majors: ${school.majors ? school.majors.length : 0}`);

  if (school.majors) {
    school.majors.forEach((m, idx) => {
      console.log(`  ${idx + 1}. [${m.name}] (ID: ${m.id})`);
      console.log(`     - Min GPA: ${m.minGpa} (Raw: ${m.rawMinGpa})`);
      console.log(`     - Min Credits: ${m.minCredits} (Raw: ${m.rawMinCredits})`);
      console.log(`     - Required Courses Count: ${m.requiredCourses.length}`);
      console.log(`     - Required Courses: [${m.requiredCourses.join(', ')}]`);
    });
  }
});
