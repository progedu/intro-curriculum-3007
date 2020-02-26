'use strict';

/**
 * 引数で与えられた数値が17で割り切れるかどうかを返す
 * @param {int} number
 * @return {boolean} 17で割り切れるなら true
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
