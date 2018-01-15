'use strict';
/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {number} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
