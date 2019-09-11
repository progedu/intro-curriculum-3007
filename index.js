'use strict';
/**
 * 17 で割り切れるかどうかを返す関数
 * @param {integer} val
 * @return {boolean} 17で割り切れるかどうか
*/
function isMultipleOfSeventeen(val) {
  return val % 17 === 0 ;
}

module.exports = {
  isMultipleOfSeventeen
}
