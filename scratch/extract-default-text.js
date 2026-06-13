const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// A regex to match tags with data-i18n and extract their contents
// e.g. <span data-i18n="key">Default Text</span>
const rx = /<([a-zA-Z0-9\-]+)[^>]*data-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/g;
let match;
const defaults = {};
while (match = rx.exec(html)) {
  const tag = match[1];
  const key = match[2];
  const content = match[3].trim().replace(/\s+/g, ' ');
  defaults[key] = content;
}

// Also handle elements that self-close or have inputs
// e.g. <input data-i18n="key" placeholder="Default"... />
const inputRx = /<input[^>]*data-i18n="([^"]+)"[^>]*placeholder="([^"]+)"/g;
while (match = inputRx.exec(html)) {
  defaults[match[1]] = match[2];
}

console.log(JSON.stringify(defaults, null, 2));
