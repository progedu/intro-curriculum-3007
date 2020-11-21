'use strict';

/**
 * 整数が17で割り切れるかを返す
 * @param {array} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return true;
  }
  return false;
}

module.exports = {
  isMultipleOfSeventeen,
}
