'use strict';

/**
 * 整数nが17で割り切れるかを判定する
 * @param {number} n 整数
 * @return {boolean} 17で割り切れるかどうかの真偽値
 */
function isMultipleOfSeventeen(n) {
    return n % 17 == 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
}
