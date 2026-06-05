const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'terms-privacy-pricing.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all occurrences of Transfer Compass with TransferChek
content = content.replace(/Transfer Compass/g, 'TransferChek');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Rebranded terms-privacy-pricing.html successfully.');
