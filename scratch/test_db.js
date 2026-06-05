const fs = require('fs');
const path = require('path');
const vm = require('vm');

const transferDataPath = path.join(__dirname, '..', 'transfer-data.js');
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const database = sandbox.window.transferDatabase;
if (!database || !database.schools) {
  console.error('Failed to load transferDatabase');
  process.exit(1);
}

console.log(`Loaded ${database.schools.length} schools.`);
database.schools.forEach(school => {
  console.log(`School: ${school.name} (id: ${school.id}), Majors: ${school.majors.length}`);
  if (school.name.includes("Stanford") || school.name.includes("스탠포드") || school.name.includes("Harvard") || school.name.includes("하버드")) {
    console.log("Details for " + school.name + ":");
    school.majors.slice(0, 3).forEach(major => {
      console.log(`  Major: ${major.name}`);
      console.log(`    requiredCourses: ${JSON.stringify(major.requiredCourses)}`);
      console.log(`    recommendedCourses: ${JSON.stringify(major.recommendedCourses)}`);
    });
  }
});
