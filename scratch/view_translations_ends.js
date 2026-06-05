const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
let enEnd = -1;
let koEnd = -1;
let zhEnd = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('ko: {')) {
    enEnd = i - 1;
  }
  if (line.includes('zh: {')) {
    koEnd = i - 1;
  }
  if (line.includes('const database') || line.includes('const transferDatabase')) {
    zhEnd = i - 1;
    break;
  }
}

console.log(`en block ends around line ${enEnd + 1}`);
console.log(`ko block ends around line ${koEnd + 1}`);
console.log(`zh block ends around line ${zhEnd + 1}`);

// Print surrounding lines
console.log("\n--- en end context ---");
console.log(lines.slice(enEnd - 5, enEnd + 5).join('\n'));

console.log("\n--- ko end context ---");
console.log(lines.slice(koEnd - 5, koEnd + 5).join('\n'));

console.log("\n--- zh end context ---");
console.log(lines.slice(zhEnd - 5, zhEnd + 5).join('\n'));
