const fs = require('fs');
const stylesCssPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/styles.css';
const content = fs.readFileSync(stylesCssPath, 'utf8');

const lines = content.split('\n');
console.log('--- Styles for english-fields / switch-row ---');
lines.forEach((line, index) => {
  if (line.includes('english-fields') || line.includes('switch-row')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
