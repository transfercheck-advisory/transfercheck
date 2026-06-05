const fs = require('fs');
const path = require('path');
const vm = require('vm');

const content = fs.readFileSync('app.js', 'utf8');
const parts = content.split('const TRANSLATIONS =');
const body = parts[1].split('const database')[0];
const codeToRun = 'var TRANSLATIONS =' + body;

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(codeToRun, sandbox);
const T = sandbox.TRANSLATIONS;

console.log("en keys:", 'holistic_eval_title' in T.en);
console.log("ko keys:", 'holistic_eval_title' in T.ko);
console.log("zh keys:", 'holistic_eval_title' in T.zh);
if ('holistic_eval_title' in T.en) console.log("en title:", T.en.holistic_eval_title);
if ('holistic_eval_title' in T.ko) console.log("ko title:", T.ko.holistic_eval_title);
if ('holistic_eval_title' in T.zh) console.log("zh title:", T.zh.holistic_eval_title);
