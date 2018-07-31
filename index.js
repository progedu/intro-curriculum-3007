'use strict';

/**
 * 17で割り切れる場合trueを返す
 * @param {Int} num
 * @return boolean
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}