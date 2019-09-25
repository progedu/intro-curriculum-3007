'use strict';


/**
 * 整数が17で割り切れるか否かを判定する
 *
 * @param {int} num
 * @returns numが17で割り切れるか
 */
function isMultipleOfSeventeen(num){
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
