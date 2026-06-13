const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const deployedUrl = 'https://transfercheck-n4qpabu9d-hamingim651-5564s-projects.vercel.app/transfer-data.js';

console.log(`Fetching deployed transfer-data.js from ${deployedUrl}...`);

https.get(deployedUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    try {
      vm.runInContext(data, sandbox);
      const db = sandbox.window.transferDatabase;
      if (!db || !db.schools) {
        console.error("❌ Failed to parse deployed transferDatabase");
        return;
      }
      console.log(`\n=== Deployed Database Info ===`);
      console.log(`Total Schools: ${db.schools.length}`);
      console.log(`Total Majors: ${db.schools.flatMap(s => s.majors || []).length}`);
      console.log(`------------------------------`);
      db.schools.forEach((school, index) => {
        console.log(`${index + 1}. ${school.name} (${school.shortName}): ${school.majors ? school.majors.length : 0} majors`);
      });
    } catch (e) {
      console.error("❌ Error parsing deployed DB code:", e);
    }
  });
}).on('error', (err) => {
  console.error("❌ Request error:", err);
});
