const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('evaluateProgram') || line.includes('renderRequirements') || line.includes('req-card') || line.includes('checklist')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
