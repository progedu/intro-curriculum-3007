'use strict';

/** 17で割り切れる数かどうかを返す
* @param {int}
* @return {boolean}
*/
function isMultipleOfSeventeen(num) {
	return num % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
}
