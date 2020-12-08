'use strict';

/**
 * 17の倍数をtrueで返す関数
 * @param {number} 数値
 * @return {boolean}
 */

function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
}

