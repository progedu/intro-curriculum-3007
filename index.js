'use strict';

/**
* 数字を受け取り、17の倍数の時Trueを返す
* @param {number} n 
*/
function isMultipleOfSeventeen(n) {
	return n % 17 === 0;	// の時Trueを返す
  }

module.exports = {
	isMultipleOfSeventeen,
};
