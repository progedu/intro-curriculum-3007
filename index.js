'use strict';

/**
 * 整数が17で割り切れるかどうかを判定して結果を返す
 * @param {number} number
 */
function isMultipleOfSeventeen(number) {
    return (number % 17 == 0);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
