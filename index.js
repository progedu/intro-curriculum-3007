'use strict';
/**
* 17の倍数で割り切れる場合 ture を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
