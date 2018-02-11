'use strict';

/**
 * 17の倍数か判定する
 */
function isMultipleOfSeventeen(n) {
	return ((n % 17) === 0);
}

module.exports = {
	isMultipleOfSeventeen: isMultipleOfSeventeen
}
