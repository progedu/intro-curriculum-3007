'use strict';

/**
 * 配列に含まれる整数が 17 で割り切れるものだけにする
 * @param {numbar} num
 */

 function isMultipleOfSeventeen(num) {
     return num % 17 ===0;
}

module.exports = {isMultipleOfSeventeen}
