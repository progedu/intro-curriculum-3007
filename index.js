'use strict';

/**
 * 17の倍数の場合、trueを返す
 * @param {Number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 ===0;
}

module.exports = {
    isMultipleOfSeventeen
}
