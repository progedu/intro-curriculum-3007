'use strict';

/**
 * 17の倍数かの判定
 * @param {number} num
 * @returns {boolean} 17の倍数のときtrueを返す
 */
function isMultipleOfSeventeen(num) {
    return (num % 17) == 0;
}

module.exports = {
    isMultipleOfSeventeen
}
