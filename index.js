'use strict';
const numbers = [];

/**
 * 整数が17で割り切れるかどうかを判定
 * @param {number} number
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 === 0)  {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
