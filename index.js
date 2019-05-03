'use strict';

/**
* 引数の数値が17で割れるかを判定する
* @param {int} num
* @return {boolean} true:17で割れる,false:17で割れない
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
