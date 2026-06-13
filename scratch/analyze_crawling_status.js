const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const dbPath = path.join(root, 'transfer-data.js');

const dbContent = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbContent, sandbox);
const database = sandbox.window.transferDatabase;

let total = 0;
let hasUrl = 0;
let hasRawText = 0;

database.schools.forEach(school => {
  (school.majors || []).forEach(major => {
    total++;
    // Helper to check if URL exists
    const fields = [
      major.note || "",
      (major.english && major.english.raw) || "",
      major.rawRequired || ""
    ];
    let foundUrl = false;
    for (const text of fields) {
      let match = text.match(/https?:\/\/[^\s]+(\.html|\.php|\/|[a-z0-9])/i);
      if (match) { foundUrl = true; break; }
      match = text.match(/\b([a-z0-9]+(-[a-z0-9]+)*\.)+(edu|org|com|net)(\/[^\s]*)?/i);
      if (match && !match[0].toLowerCase().includes('toefl') && !match[0].toLowerCase().includes('ielts')) {
        foundUrl = true; break;
      }
    }

    if (foundUrl) hasUrl++;
    if (major.rawOfficialText && major.rawOfficialText.trim() !== '') hasRawText++;
  });
});

console.log(`=== Database Crawling Status ===`);
console.log(`Total Majors: ${total}`);
console.log(`Majors with extractable Source URL: ${hasUrl}`);
console.log(`Majors with rawOfficialText populated: ${hasRawText}`);
console.log(`Majors needing crawl: ${hasUrl - hasRawText}`);
