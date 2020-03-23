'use strict';

/**
 * 整数を17で割り切れるかどうかを判定する
 * @param {number} integralValue
 * @return {boolean} 17で割り切れるかどうか
 */

function isMultipleOfSeventeen(integralValue) {
  return integralValue % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen
}
