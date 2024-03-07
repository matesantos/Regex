const fs = require('fs');
const bancoCvs = 'database.csv';
const banco = fs.readFileSync(bancoCvs,'utf-8');

const regexNome = /^([A-Za-zÀ-ÿ])+(\s[A-Za-zÀ-ÿ]+)+/gm

const matchNome = banco.match(regexNome)
console.log(matchNome);
