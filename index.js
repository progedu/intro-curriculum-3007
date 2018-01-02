'use strict';

/**
 * multiple of seventeen
 * @param {array} numbers
 * @return boolean
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
