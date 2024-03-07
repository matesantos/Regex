const fs = require('fs');
const bancoCvs = 'database.csv';
const banco = fs.readFileSync(bancoCvs,'utf-8');

const regex = /Anna/;

const matchRegex = banco.match(regex)
console.log(matchRegex);