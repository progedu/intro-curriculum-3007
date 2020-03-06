'use strict';
/**
 * 17で割り切れるかどうか判定する
 * @param {integer} 整数
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
}
