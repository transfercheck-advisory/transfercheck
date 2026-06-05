const fs = require('fs');
const path = require('path');
const vm = require('vm');

const transferDataPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/transfer-data.js';
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const database = sandbox.window.transferDatabase;
console.log('School Count:', database.schools.length);
database.schools.forEach(s => {
  console.log(`- Name: "${s.name}", ID: "${s.id}", Majors Count: ${s.majors ? s.majors.length : 0}`);
});
