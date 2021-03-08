/**
 * seventeenモジュールの実装
 * @param {number} num
 */

'use strict';
function isMultipleOfSeventeen(num){
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
