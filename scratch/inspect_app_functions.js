const fs = require('fs');
const appJsPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/app.js';
const content = fs.readFileSync(appJsPath, 'utf8');

const lines = content.split('\n');
console.log('--- Key Functions in app.js ---');
lines.forEach((line, index) => {
  if (line.includes('function') || line.includes('const ') && (line.includes('=>') || line.includes('render') || line.includes('build') || line.includes('calculate') || line.includes('match') || line.includes('search') || line.includes('filter'))) {
    if (line.length < 120) {
      console.log(`${index + 1}: ${line.trim()}`);
    }
  }
});
