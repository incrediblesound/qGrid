/*
 * This is a library of simple maps from symbols used in the language
 * to symbols when compiling to c
 */

exports.valueToType = {
	'string':'s',
	'number':'i'
};
exports.relationToType = function(relation){
	var lib = {
		'->':'e', //equals
		'-!':'n'  //not equals
	};
	return lib[relation] !== undefined ? lib[relation] : 'c' //custom
};

exports.relationToFunc = {
	'->':'has_state',
	'-!':'not_has_state'
};