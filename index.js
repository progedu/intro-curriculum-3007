'use strict';

/**
 * 指定された整数が 17 で割り切れるかどうかを判定する。
 * @param {number} number
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
