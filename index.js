'use strict';

/**
* 17で割り切れるかどうかの判定
* @param {number} num
* @return {boolean} 17の倍数の時はtrueを返す
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
  }

module.exports = {
    isMultipleOfSeventeen
}
