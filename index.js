'use strict';

/**
 * 17で割り切れる整数かどうかを判定する
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
