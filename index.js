'use strict';

/**
 * 整数が17で割り切れるか判定する
 * @param {integer} number
 * @return 17で割り切れたらtrue、それ以外はfalse
 */
function isMultipleOfSeventeen(number) {
  return number % 17 == 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
