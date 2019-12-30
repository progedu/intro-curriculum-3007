'use strict';

/**
* 17の倍数である場合 true を返す
* @param {number} num
* @return {boolean} 17で割れたかどうか
*/
function isMultipleOfSeventeen(number) {
  return number % 17 === 0;
}

module.exports = {isMultipleOfSeventeen}
