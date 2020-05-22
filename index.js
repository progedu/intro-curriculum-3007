'use strict';

/**
 * 数値を受け取ってそれが 17 の倍数であるかを判定する関数
 * @param {num} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
   return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
