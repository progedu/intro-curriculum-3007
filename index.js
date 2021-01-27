'use strict';
/**
 * 17で割り切れる整数
 * @param {int}
 * @return {bool}
 */
function isMultipleOfSeventeen(num) {
    return num % 17===0;
}
module.exports = {
    isMultipleOfSeventeen
}
