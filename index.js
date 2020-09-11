'use strict';
/**
 * 17の倍数である場合 true を返す
 * コメントは答え見て書き足しました
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
