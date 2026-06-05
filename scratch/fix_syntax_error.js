const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app.js');
let code = fs.readFileSync(filePath, 'utf8');

// Replace any escaped backticks containing backslashes in the target picker area
code = code.replace(/\\`/g, '`');

fs.writeFileSync(filePath, code, 'utf8');
console.log('Fixed escaped backticks in app.js.');
