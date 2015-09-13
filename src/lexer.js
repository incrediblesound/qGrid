var _ = require('./javascript/helpers.js');

module.exports = function(body){
	var result = [];
	body = body.split(/(\r\n|\n|\r)/);
	_.forEach(body, function(line){
		if(!(/(\r\n|\n|\r)/).test(line) && line.length){
			if(line[0] !== '*'){
				line = line.split(/(\?|\-\>|\:|\-\!|\,|\^)/);
				line = _.noEmpties(line);
				result.push(line);
			}
		}
	})
	return result;
}