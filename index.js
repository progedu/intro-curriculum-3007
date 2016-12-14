'use strict';

/**
 * 与えられた数字が17で割り切れるかどうか判定する
 * @param {number} number
 * @return {number} number
 */
function isSeventeen(number) {
  if (number % 17 === 0) {
    return number;
  } else {
    return;
  }
}

module.exports = {
  isSeventeen: isSeventeen
};
