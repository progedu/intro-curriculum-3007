'use strict';

/**
 * 17で割り切れる数を返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}