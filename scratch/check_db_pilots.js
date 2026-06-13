const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbContent, sandbox);
const database = sandbox.window.transferDatabase;

const uw = database.schools.find(s => s.id === "university-of-washington-2fde0bf4");
const major = uw.majors.find(m => m.id === "university-of-washington-business-administration-pilot");

console.log(`=== Pilot Major Check ===`);
console.log(`Major Name: ${major.name}`);
console.log(`rawOfficialText Present: ${!!major.rawOfficialText}`);
if (major.rawOfficialText) {
  console.log(`rawOfficialText Length: ${major.rawOfficialText.length} chars`);
  console.log(`rawOfficialText Snippet:\n${major.rawOfficialText.slice(0, 500)}...`);
}
