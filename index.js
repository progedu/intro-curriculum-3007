'use strict';
/**
 * 整数が17の倍数か判定する
 * @param {int} n
 * @return {boolean}
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
