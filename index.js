'use strict';

/**
 * 17の倍数の場合 true を返す
 * @param {number} number
 * @returns {boolean}
 */

function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
};
