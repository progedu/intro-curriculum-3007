'use strict';

/**
 * 配列を17で割り切れる数のみの配列にする
 * @param {number} integralValue
 * @return {boolean} 17で割り切れるかどうか
 */

function isMultipleOfSeventeen(integralValue) {
  return integralValue % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen
}
