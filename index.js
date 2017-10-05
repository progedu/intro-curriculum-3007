'use strict';

/**
 * 17で割り切れるかどうかを返す関数
 * @param {number} num
 * @return {boolean} 17で割り切れる: true, 割り切れない: false
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen 
}
