'use strict';
/**
 * 17の倍数をtrueで返す関数
 * @param {num} 数値
 * @return {bool}
 */

function isMultipleOfSeventeen(num){
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}


