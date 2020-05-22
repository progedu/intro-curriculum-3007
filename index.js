'use strict';
/**
* 与えられた整数が17で割り切れるかを示す真偽値
* @param {number} num
* @return {boolean} 17で割り切れる場合、true
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0; 
}

module.exports = { 
  isMultipleOfSeventeen
};