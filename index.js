'use strict';

/**
 * number が 17 で割り切れるかどうかを判定する
 * @param {boolean} number 
 */
function isMultipleOfSeventeen(number) {
    return (number % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
