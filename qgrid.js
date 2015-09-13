var fs = require('fs');
var program = require('commander');

var main = require('./src/main.js');

program.parse(process.argv);

var body = fs.readFileSync('./'+program.args[0]+'.qgd').toString();
var exportName = program.args[1];
exportName = exportName || 'out';

main(body, exportName);