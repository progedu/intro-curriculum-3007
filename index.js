'use strict';
/**
 * 整数が１７で割り切れるかを判定
 * @param {number} number 
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
