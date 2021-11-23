'use strict';

/**
 * 17 で割り切れるか判定する
 * @param n {Integer} 非負整数
 * @returns {boolean} 17で割り切れるか
 */
function isMultipleOfSeventeen(n) {
    return n % 17 == 0;
}

module.exports = {
    isMultipleOfSeventeen
}
