const fs = require('fs');
const content = fs.readFileSync('course-catalog.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('materials-science') || line.includes('Materials Science')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
