'use strict';
/**
 * 配列に含まれる整数が 17 で割り切れるものだけを返却する
 * @param {Array}
 */
function isMultipleOfSeventeen(number) {
  var result = number % 17
  return result === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
