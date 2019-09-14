'use strict';
/**
 * 引数が17の倍数の時、ture を返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
  if (n < 0) {return };
  return n % 17 === 0;
}
module.exports = { isMultipleOfSeventeen };
