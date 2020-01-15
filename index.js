'use strict';

/**
 * 値が17で割り切れるときtureを返す
 * @param {number} num 
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
