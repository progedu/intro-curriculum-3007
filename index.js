"use strict";

/**
 * 17で割り切れるかの真偽値を返却する
 * @param {Number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
