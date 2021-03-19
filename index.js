'use strict';

/**
 * 17で割り切れたらtrueを返す関数
 * @param {array} num
 * @return {array} 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen : isMultipleOfSeventeen
}
