'use strict';

/**
* 整数を受け取り、17で割り切れるか否かを判定
* @param {integer} n
* @return {boolean}
*/
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
  }

module.exports = {
    isMultipleOfSeventeen
}
