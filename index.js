'use strict';
/**
 * 整数が 17 で割り切れるかどうかを判定する isMultipleOfSeventeen 関数
 * @numbers {number} num  数字の入った配列
 * return {boolen}
 */

function isMultipleOfSeventeen(num){
      return num % 17 === 0;
}

module.exports = { 
  isMultipleOfSeventeen
}
