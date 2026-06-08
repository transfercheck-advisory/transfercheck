const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const transferDataPath = path.join(root, 'transfer-data.js');

const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const database = sandbox.window.transferDatabase;
if (!database || !database.schools) {
  console.error('Failed to load database');
  process.exit(1);
}

console.log(`Total Schools: ${database.schools.length}`);
database.schools.forEach((s, idx) => {
  console.log(`${idx + 1}. ${s.name} (${s.shortName || 'N/A'})`);
});
