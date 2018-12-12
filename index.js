'use strict';

/**
 * 17 で割り切れる場合 true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17.0 === 0.0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
