const fs = require('fs');
const content = fs.readFileSync('C:/Users/user/OneDrive/바탕 화면/transfer app/app.js', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('requirementSearch') || line.includes('activateProductTab') || line.includes('requirementSelect') || line.includes('requirementMenu')) {
        console.log(`${index + 1}: ${line.trim()}`);
    }
});
