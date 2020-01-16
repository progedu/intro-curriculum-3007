'use strict';

/**
 * 整数が17で割り切れるかどうか判定
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
  const x = 17;
  return !(num % x);
}

module.exports = {
  isMultipleOfSeventeen
}
