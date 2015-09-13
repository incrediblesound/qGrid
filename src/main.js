var lexer = require('./lexer.js');
var parser = require('./parser.js');
var compiler = require('./compiler.js');

module.exports = function(body, name){
	var lines = lexer(body);
	var stack = parser(lines);
	compiler(stack, name);
}