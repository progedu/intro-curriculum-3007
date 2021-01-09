'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {number} 
 * @returns {boolean}
 */
function isMultipleOfSeventeen(numarray) {
    if (numarray % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
