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
const targetSchools = [
  "University of Notre Dame",
  "Vanderbilt University",
  "University of Maryland, College Park (UMD)",
  "Rutgers University"
];

targetSchools.forEach(name => {
  const school = transferDatabase.schools.find(s => s.name === name);
  if (!school) {
    console.log(`❌ School not found: ${name}`);
    return;
  }

  console.log(`\n==================================================`);
  console.log(`🏫 School: ${school.name}`);
  console.log(`==================================================`);
  
  // inspect 2 representative majors: CS and Mechanical
  const inspectMajors = ["Computer Science", "Mechanical Engineering", "Chemical Engineering"];
  inspectMajors.forEach(mName => {
    const major = school.majors.find(m => m.name.toLowerCase().includes(mName.toLowerCase()));
    if (!major) {
      console.log(`  🔍 Major [${mName}] not found for this school.`);
      return;
    }
    console.log(`  🔹 Major: ${major.name}`);
    console.log(`     - minGpa: ${major.minGpa} (raw: "${major.rawMinGpa}")`);
    console.log(`     - minCredits: ${major.minCredits} (raw: "${major.rawMinCredits}")`);
    console.log(`     - English Requirement: "${major.english.raw}"`);
    console.log(`     - Required Courses:`);
    major.requiredCourses.forEach(c => console.log(`       * ${c}`));
  });
});
