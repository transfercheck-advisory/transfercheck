const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
let found = false;
let braceCount = 0;
let output = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('function renderRequirementDetail')) {
    found = true;
  }
  if (found) {
    output.push(`${i + 1}: ${line}`);
    const openBraces = (line.match(/{/g) || []).length;
    const closeBraces = (line.match(/}/g) || []).length;
    braceCount += openBraces - closeBraces;
    if (braceCount === 0 && output.length > 1) {
      break;
    }
  }
}
console.log(output.join('\n'));
