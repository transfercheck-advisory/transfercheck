const fs = require('fs');
const path = require('path');

const filesToRebrand = [
  'make-bat.js',
  'crawler.js',
  'extractor-template.js',
  'linter-rules.js'
];

filesToRebrand.forEach(fileName => {
  const filePath = path.join(__dirname, '..', fileName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/Transfer Compass/g, 'TransferChek');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Rebranded ${fileName} successfully.`);
  } else {
    console.warn(`File ${fileName} not found.`);
  }
});
