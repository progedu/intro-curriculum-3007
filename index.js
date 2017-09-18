'use strict';

/**
 * 17の倍数かどうかを返す
 * @param {number} num
 * @return {boolian} 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
