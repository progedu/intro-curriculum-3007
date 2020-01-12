'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する関数
 * @param {integer} num
 * @return {boolean} result
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0; 
}

module.exports = {
  isMultipleOfSeventeen
}
