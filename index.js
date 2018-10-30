'use strict';

/**
* 配列に含まれる整数が17で割り切れるかどうか判定する
* @param {number} numbers
*/
function isMultipleOfSeventeen(numbers) {
  return numbers % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
