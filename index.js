'use strict';

/**
 * 17の倍数である true を返す
 * @param {number}
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
