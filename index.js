'use strict';

/**
 * 数字を受け取り、17で割り切れるかどうかを返す
 * @param {Number} number
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
