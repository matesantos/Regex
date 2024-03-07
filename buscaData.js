const fs = require('fs');
const bancoCvs = 'database.csv';
const banco = fs.readFileSync(bancoCvs,'utf-8');

const regexData = /\d{2}[\/.\s]?\d{2}[\/.\s]?\d{4}$/gm;
const matchData = banco.match(regexData)
console.log(matchData);