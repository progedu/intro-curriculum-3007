'use strict';
/**
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    return num;    
  }
}

module.exports = {
  isMultipleOfSeventeen
};
