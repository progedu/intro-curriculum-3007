'use strict';

/**
 * 17で割り切れるようにする
 * @param {string} number
 */
function isMultipleOfSeventeen(number) {
  return number % 17 ===0;
}

module.exports = {
  isMultipleOfSeventeen
}
