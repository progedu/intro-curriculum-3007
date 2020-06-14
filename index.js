'use strict';
const ar = new Array();

/**
 * 17で割り切れる場合trueを返す
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
