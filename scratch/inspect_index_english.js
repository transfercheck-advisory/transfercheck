const fs = require('fs');
const indexHtmlPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/index.html';
const content = fs.readFileSync(indexHtmlPath, 'utf8');

const lines = content.split('\n');
console.log('--- English/International UI elements in index.html ---');
lines.forEach((line, index) => {
  if (line.includes('english') || line.includes('English') || line.includes('international') || line.includes('International') || line.includes('Score')) {
    if (line.length < 150) {
      console.log(`${index + 1}: ${line.trim()}`);
    }
  }
});
