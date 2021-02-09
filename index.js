'use strict';
/**
 * 17で割り切れる整数を判定する
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
  return n % 17 === 0;
}
module.exports = {
  isMultipleOfSeventeen
}
