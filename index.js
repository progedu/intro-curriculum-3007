'use strict';

/**
 * numberが17で割り切れるかどうかを判定する
 * @param {Number} number 
 * @return {boolean} numberが17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
