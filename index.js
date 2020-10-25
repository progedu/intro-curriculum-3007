'use strict';
/**
 * 整数が17で割り切れる場合 true を返す
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
