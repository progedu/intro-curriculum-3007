'use strict';

/**
 * 整数が17で割り切れるか判定する
 * @param {int} n
 * @return {boolean} 割り切れるか？
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
