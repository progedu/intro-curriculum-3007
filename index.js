'use strict';

/**
 * 文字列を17で割れるか確認する。
 * @return {int} number
 */
 function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
  }
  
module.exports = {
    isMultipleOfSeventeen
}