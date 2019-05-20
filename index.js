'use strict';

/**
 * 配列に含まれる整数が17の倍数であるかを判定する
 * @param {number} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
} 
module.exports = { isMultipleOfSeventeen }
