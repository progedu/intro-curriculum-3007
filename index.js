'use strict';

function seventeen(numbers){
	return numbers.filter(isMultipleOfSeventeen);
}

function isMultipleOfSeventeen(number){
	return number%17 === 0;
}

module.exports = {
	seventeen, isMultipleOfSeventeen
}
