'use strict';

/**
 * 整数が17で割り切れればtrue
 * @param {number} n
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}