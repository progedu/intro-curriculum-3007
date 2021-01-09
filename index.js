'use strict';
/**
 * 17の倍数をtrueで返す関数
 * @param {number} 数値
 * @returns {bool} 真偽地値(boolean)
 */
function isMultipleOfSeventeen(number) { // 配列の数値をとりたいので、引数には数値をあらわすnumberを入れた
  return number % 17 === 0; // numberが17で割り切れるか
}

module.exports = {isMultipleOfSeventeen};
