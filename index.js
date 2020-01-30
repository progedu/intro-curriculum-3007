'use strict';

/**
* 17の倍数の一覧の配列を取得する
* @param {array} numbers
* @return {boolean} 17の倍数かどうか
*/
 function isMultipleOfSeventeen(numbers) {
    return numbers % 17 === 0;
  }

module.exports = {
    isMultipleOfSeventeen
}