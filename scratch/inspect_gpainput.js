const fs = require('fs');
const appJsPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/app.js';
const content = fs.readFileSync(appJsPath, 'utf8');

const lines = content.split('\n');
console.log('--- #gpaInput in app.js ---');
lines.forEach((line, index) => {
  if (line.includes('#gpaInput')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
