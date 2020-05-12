'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {number} intNum
 * @returns {boolean}
 */
function isMultipleOfSeventeen(intNum) {
  return intNum % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
