const fs = require('fs');
const path = require('path');
const vm = require('vm');

const transferDataPath = path.join(__dirname, '..', 'transfer-data.js');
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);
const database = sandbox.window.transferDatabase;

const stanford = database.schools.find(s => s.id.includes('stanford'));
if (stanford) {
  const chem = stanford.majors.find(m => m.name.includes('Chemical'));
  console.log("Stanford ChemEng details:", JSON.stringify(chem, null, 2));
}
