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

console.log(`=== School and Major Counts in Local transfer-data.js ===`);
console.log(`Total Schools: ${transferDatabase.schools.length}`);
console.log(`Total Majors across all schools: ${transferDatabase.schools.flatMap(s => s.majors || []).length}`);
console.log(`----------------------------------------`);

transferDatabase.schools.forEach((school, index) => {
  const majorCount = school.majors ? school.majors.length : 0;
  console.log(`${index + 1}. ${school.name} (${school.shortName}): ${majorCount} majors`);
});
