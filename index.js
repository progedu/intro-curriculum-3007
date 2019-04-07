'use strict';

/**
 * 配列に含まれる整数が１７で割り切れるかどうか判定する
 * @param {number} number
 */
function isMultipleOfSeventeen(num) {
    return (num % 17) === 0
}
module.exports = {
    isMultipleOfSeventeen
}
