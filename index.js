'use strict';

/**
 * 17で割り切れるか判定する
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
  return (num % 17 === 0);
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
