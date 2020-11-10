'use strict';

/**
 * 17の倍数を返す関数
 * @param {number} 数値
 */
function isMultipleOfSeventeen(nunber) {
  return nunber % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen
}