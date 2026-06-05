const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Searching for occurrences of \\${ in app.js...');

let count = 0;
let updatedContent = content.replace(/\\\$\{/g, () => {
  count++;
  return '${';
});

if (count > 0) {
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Successfully replaced ${count} occurrence(s) of \\$\{ with \$\{ in app.js.`);
} else {
  console.log('No occurrences of \\${ found.');
}
