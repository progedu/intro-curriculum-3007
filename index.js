'use strict';

/**
 * is number multiple of 17
 * @param {number} number
 * @returns {boolean}  
 */
function isMultipleOfSeventeen(number) {
    return (number % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
