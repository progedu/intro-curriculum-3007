'use strict';
/**
 * 17の倍数である場合　trueを返す
 * @param {number}数値
 * @returns {bool}
 */
function isMultipleOfSeventeen(number){
  return number % 17 === 0;
}
module.exports = {
 isMultipleOfSeventeen
}
