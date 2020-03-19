'use strict';
/**
 * 17で割り切れる数字のみにフィルタリングする
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

 module.exports = {
    isMultipleOfSeventeen
}