'use strict';

/**
 * 17で割り切れる要素を取り出す
 * @param {Number} number
 */
function isMultipleOfSeventeen(number) {
    return number%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
