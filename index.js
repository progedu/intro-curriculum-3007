'use strict';

/**
 * 17で割り切れるかどうかを判定する。割れたら true を返す
 * @param {number} num
 * @return {boolean}
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
