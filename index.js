'use strict';

/**
 * 17で割り切れるかどうかを判定する
 * @param {number} num
 * @returns
 */
function isMultipleOfSeventeen(num) {
  return !(num % 17);
}

module.exports = {
  isMultipleOfSeventeen
}
