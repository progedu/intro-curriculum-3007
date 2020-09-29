'use strict';
/**
 * 17の倍数をtrue で返す関数
 * @param {number} 数値
 * @returns{bool}
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};