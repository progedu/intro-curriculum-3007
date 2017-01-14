'use strict';

/**
 * 整数が17で割り切れる場合trueを返す
 * @param {number} num
 */
function isSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isSeventeen: isSeventeen
}
