'use strict';

/**
 * 配列に含まれる整数が17で割り切れるか返す
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
