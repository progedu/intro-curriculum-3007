'use strict';
/**
 * 17の倍数のみtrue
 * multiple of num
 * (num の倍数)
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
