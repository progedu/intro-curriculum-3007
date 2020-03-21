'use strict';

/**
 * 整数値が7で割り切れるかの判定
 * @param {number} number 
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
