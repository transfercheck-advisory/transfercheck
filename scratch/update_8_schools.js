const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const transferDataPath = path.join(root, 'transfer-data.js');
const newSchoolsPath = path.join(__dirname, 'new_schools.json');

// 1. Read transfer-data.js
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);
const database = sandbox.window.transferDatabase;

console.log('Original School Count:', database.schools.length);
console.log('Original Program Count:', database.schools.flatMap(s => s.majors).length);

// 2. Read new_schools.json
const newSchools = JSON.parse(fs.readFileSync(newSchoolsPath, 'utf8'));
console.log('Adding New Schools:', newSchools.length);

// 3. Push to database
newSchools.forEach(school => {
  database.schools.push(school);
});

// 4. Update counts
database.schoolCount = database.schools.length;
database.programCount = database.schools.flatMap(s => s.majors).length;

console.log('New School Count:', database.schoolCount);
console.log('New Program Count:', database.programCount);

// 5. Serialize back to transfer-data.js
const serialized = `window.transferDatabase = ${JSON.stringify(database, null, 2)};\n`;
fs.writeFileSync(transferDataPath, serialized, 'utf8');
console.log('Successfully updated transfer-data.js with the 8 new universities!');
