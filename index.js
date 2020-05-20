'use strict';

/**
 * 整数が17で割り切れるかどうか判定する
 * @param {number} num 整数
 * @returns {boolean} true: 割り切れる, false: 割り切れない
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
