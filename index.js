'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} int 
 * @return {boolean}
 */
function isMultipleOfSeventeen(int) {
    if (int % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
