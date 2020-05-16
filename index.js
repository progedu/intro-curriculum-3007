'use strict';

/**
 * @param {number} 判定する数値
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
	return (number % 17) === 0;
}

module.exports = {
	isMultipleOfSeventeen
};