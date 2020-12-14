'use strict';
/**
 * 17で割り切れるときtrueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
