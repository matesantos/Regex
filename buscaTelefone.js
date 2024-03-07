const fs = require('fs');
const bancoCvs = 'database.csv';
const banco = fs.readFileSync(bancoCvs,'utf-8');

const regex = /\(\d{2}\)\s\d{4,5}-\d{4}/g;

const matchTelefone = banco.match(regex)
console.log(matchTelefone);

const patternCel = /\(\d{2}\)\s9\d{4}-\d{4}/g;
const matchCell = banco.match(patternCel)
console.log(matchCell);
