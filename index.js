(function () {
	'use strict';
	/**
	 * 17で割り切れるものはtrueを返す
	 * @param {number} num
	 */
	function isSeventeen(num) {
		return num % 17 === 0;
	} 

	module.exports = {
		isSeventeen: isSeventeen
	}
})();