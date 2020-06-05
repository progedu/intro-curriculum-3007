'use strict';
/**
 * 与えられた数字が17で割り切れる時trueを返す
 * @param {int} n
 */
function isMultipleOfSeventeen(n) {
    return n % 17 == 0
}

module.exports = {
    isMultipleOfSeventeen
}
