const fs = require('fs');
const files = ['index.html', 'terms-privacy-pricing.html', 'app.js'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const lower = line.toLowerCase();
    if (lower.includes('statcompass') || lower.includes('reqradar') || lower.includes('pathfinder')) {
      console.log(`[${file}:${idx + 1}] ${line.trim()}`);
    }
  });
});
