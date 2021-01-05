'use strict';
/**
 * 引数の数字が17で割り切れるか
 * @param {number} number
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

// const isMultipleOfSeventeen = (number) => number % 17 === 0;

module.exports = {
  isMultipleOfSeventeen
}