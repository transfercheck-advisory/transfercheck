const fs = require('fs');
const path = require('path');

const appJsPath = 'c:/Users/user/OneDrive/바탕 화면/transfer app/app.js';
const content = fs.readFileSync(appJsPath, 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('badge_verified_tag') || line.includes('confidence') || line.includes('Verified')) {
    console.log(`${index + 1}: ${line.trim()}`);
  }
});
