'use strict';

/**
 * 配列に含まれる整数が 17 で割り切れる場合、真を返す
 * @param {number} n
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
