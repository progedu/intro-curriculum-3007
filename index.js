'use strict';

/**
 * 整数が17で割り切れるかどうかを判定
 * @param {int} 整数
 * @return {boolean}
*/
function isMultipleOfSeventeen(number){
	return number % 17 === 0;
}
module.exports = {
	isMultipleOfSeventeen
}
