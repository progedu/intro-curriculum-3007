'use strict';

/**
 * 整数が17で割り切れるかどうか判定する
 * @param {num} integer
 * @return {boolean} boolean 
 * ↓
 * 答え
 * 17の倍数である場合に true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
