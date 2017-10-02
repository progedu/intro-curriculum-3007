'use strict';
/**
* 整数が 17 で割り切れるかどうか
* @param {integer} num
* @return {false}
*/
function isMultipleOfSeventeen(num) {
  return (num % 17 === 0);
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
