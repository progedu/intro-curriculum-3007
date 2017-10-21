'use strict';
/**
 * 17で割り切れるかどうかを判定して真偽値を返す
 * @param {Int} n 
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
