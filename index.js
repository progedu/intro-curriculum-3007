'use strict';
/**
 * 数字の配列を受け取り、17で割り切れる場合、trueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
}
