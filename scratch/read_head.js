const fs = require('fs');
const content = fs.readFileSync('transfer-data.js', 'utf8');
console.log(content.slice(0, 1000));
