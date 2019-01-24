'use strict';

/**
 * 数値を受け取り、17で割り切れるか返す
 * @param {Number} num
 * @return {boolean} 割り切れるかどうか
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
