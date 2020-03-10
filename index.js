'use strict';

/**
 * 整数が17で割り切れるかどうかをはんていし、割り切れる場合はtrueを返す関数
 * @param {number} num 
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
	return num % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
}
