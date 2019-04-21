'use strict';
/**
 * 整数が 17 で割り切れるかどうかを判定
 * @param {number} num
 * @return num 17で割り切れる数
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
