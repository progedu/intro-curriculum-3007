'use strict';

/**
 * 配列に含まれる整数が17で割り切れるかどうか判定する
 * @param {number} number
 * @return {boolean} 割り切れるか否か
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
