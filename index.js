'use strict';
/**
 * if it is the number that can be divisible, return true
 * @param {number} rum
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};