'use strict';
/**
 * 17の倍数である場合 true を返す
 * @param {number} int 
 */
function isMultipleOfSeventeen(int) {
  return int % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
