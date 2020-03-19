'use strict';
/**
 * 整数が 17 で割り切れるかどうかを判定する isMultipleOfSeventeen 関数
 * @param {Number} num
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
