'use strict';
/**
 * 整数が 17 で割切れるかどうかを判定する
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num){
    if (num%17 === 0) {return true}
    return false
};

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
