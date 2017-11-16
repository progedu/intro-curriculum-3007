'use strict';

/**
 * 17の倍数かどうか判別します
 * @param {number} num
 * @returns {boolean}
 */
function isMultipleOfSeventeen(num) {
  return isMultipleOf(17, num);
}

function isMultipleOf(coef, num) {
  return num % coef === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
