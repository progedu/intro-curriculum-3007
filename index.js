'use strict';
/**
*整数が17の場合は true を返す
*@param {number} num
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
