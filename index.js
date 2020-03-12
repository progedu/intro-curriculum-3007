"use strict";

/**
 * 17で割り切れるかどうかを判断する
 * @param {int} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
