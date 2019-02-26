'use strict';

/**
 * 整数が17で割り切れるかどうかを判定
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
