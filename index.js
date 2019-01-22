'use strict';

/**
* 17 で割り切れるかどうかを判定して返す
* @param {number} numbers
* @return {boolean} 割り切れるかどうか
*/
function isMultipleOfSeventeen(numbers) {
  return numbers % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
