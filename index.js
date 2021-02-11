'use strict';

/**
 * １７の倍数であるtrueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
