'use strict';

/**
 * 整数を受け取り、17で割り切れるかどうかを返す
 * @param {number}
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
