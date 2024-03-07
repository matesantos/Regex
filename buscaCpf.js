const fs = require('fs');
const bancoCvs = 'database.csv';
const banco = fs.readFileSync(bancoCvs,'utf-8');

const regexCPF = /\d{3}[-.]?\d{3}[-.]*\d{3}[-.]?\d{2}/gm;

const matchCPF = banco.match(regexCPF)
console.log(matchCPF);
