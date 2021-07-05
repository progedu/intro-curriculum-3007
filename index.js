'use strict';

/**
 * 17で割り切れるかどうかを判断する
 * @param {number} a
 * @return {boolean} 割り切れる場合はtrue
 */
function isMultipleOfSeventeen(a){
  return (a % 17) === 0;
}


module.exports = { isMultipleOfSeventeen
}
