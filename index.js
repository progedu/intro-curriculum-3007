'use strict';

/**
 * 17で割れる場合、trueを返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };