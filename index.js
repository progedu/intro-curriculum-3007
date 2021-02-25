'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {int} int
 */
function isMultipleOfSeventeen(int) {
	return int % 17 === 0 ? true: false;
}

module.exports = {
	isMultipleOfSeventeen
}
