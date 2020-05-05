'use strict';

/**
 * 整数が17で割り切れるかを返す
 * @param {number} number
 */
function isMultipleOfSeventeen(number) {
	return number % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
}
