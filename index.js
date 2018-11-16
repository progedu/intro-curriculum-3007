'use strict';

/**
 * 整数を受け取り、17で割り切れたかどうか返す
 * @param {number} num
 * @return {boolean} 17で割り切れたかどうか
 */
function isMultipleOfSeventeen (num) {
	return num % 17 === 0;
};

module.exports = {
	isMultipleOfSeventeen: isMultipleOfSeventeen
}
