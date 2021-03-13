'use strict';

/**
 * 配列の要素を受け取り、17で割り切れる要素の場合はtrueを返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
  return !(n % 17);
}

module.exports = {
  isMultipleOfSeventeen
}
