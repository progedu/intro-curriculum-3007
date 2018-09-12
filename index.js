'use strict';

/**
 * 17 で割り切れるかどうかを返す
 * @param {number} num - 数字
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
