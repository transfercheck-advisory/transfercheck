const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
let startLine = -1;
let endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const TRANSLATIONS =')) {
    startLine = i;
  }
  if (startLine !== -1 && lines[i].includes('const database')) {
    endLine = i;
    break;
  }
}

console.log(`TRANSLATIONS is between lines ${startLine + 1} and ${endLine + 1}.`);
if (startLine !== -1 && endLine !== -1) {
  // Let's print first 30 lines and last 30 lines
  console.log("--- Start of TRANSLATIONS ---");
  console.log(lines.slice(startLine, startLine + 30).join('\n'));
  console.log("...");
  console.log(lines.slice(endLine - 30, endLine).join('\n'));
}
