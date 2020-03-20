'use strict';

/**
 * 17で割り切れるかどうか判定
 * @param {Number} num
 * @returns {boolean} mod 17 = 0
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen 
}
