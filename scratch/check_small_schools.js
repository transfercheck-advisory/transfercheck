const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbContent, sandbox);
const transferDatabase = sandbox.window.transferDatabase;

const smallSchools = transferDatabase.schools.filter(s => !s.majors || s.majors.length <= 8);

smallSchools.forEach(school => {
  console.log(`🏫 ${school.name} (${school.shortName}) - ${school.majors ? school.majors.length : 0} majors:`);
  if (school.majors) {
    console.log(`   Majors: ${school.majors.map(m => m.name).join(', ')}`);
  }
  console.log(`----------------------------------------`);
});
