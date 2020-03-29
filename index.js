'use strict';

/**
 * 17の倍数であればtrue
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
  return n % 17 == 0;
}

module.exports = {
  isMultipleOfSeventeen
}
