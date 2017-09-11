'use strict';

/**
 * 整数が 17 で割り切れるかどうか
 * @param {number} n
 */
function isSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
}
