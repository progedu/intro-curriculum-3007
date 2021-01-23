'use strict';

/**
 * 17で割り切れるかどうか真偽値を返す関数
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
