const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const keys = [];
const rx = /data-i18n="([^"]+)"/g;
let match;
while (match = rx.exec(html)) {
  keys.push(match[1]);
}

const app = fs.readFileSync('app.js', 'utf8');
const startIdx = app.indexOf('const TRANSLATIONS =');
const endIdx = app.indexOf('const courseCatalog');
const transPart = app.substring(startIdx, endIdx);

const sandbox = { window: {}, exports: {} };
require('vm').runInNewContext(transPart + '\nexports.TRANSLATIONS = TRANSLATIONS;', sandbox);
const TRANSLATIONS = sandbox.exports.TRANSLATIONS;

const missingKo = [...new Set(keys.filter(k => !TRANSLATIONS.ko[k]))];
const missingEn = [...new Set(keys.filter(k => !TRANSLATIONS.en[k]))];

console.log('Missing KO keys:', missingKo);
console.log('Missing EN keys:', missingEn);
