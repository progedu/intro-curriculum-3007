'use strict';
/**
 * 引数が17の倍数かどうかを判定
 * @param {int} n 
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
