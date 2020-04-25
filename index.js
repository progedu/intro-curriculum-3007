'use strict';

/**
 * 17で割り切れるか？
 * @param {Integer} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
