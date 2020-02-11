'use strict';
/**
 * 渡された整数が 17 で割り切れるか判定する
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
	return ( num % 17 === 0 );
}

module.exports = {
	isMultipleOfSeventeen
};
