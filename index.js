'use strict';
/**
 * TODO整数が 17 で割り切れるかどうかを判定する
 * 正解の場合true返す　
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
	return num % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
};
