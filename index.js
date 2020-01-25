'use strict';

/**
* 数値Aが数値Bで割り切れるかを判定する
* @param {string} valA
* @param {string} valB
* @return {boolean} 割り切れるかどうか
*/
function isMultipleOfAny(valA, valB) {
    return (valA % valB) == 0;
}

/**
* 数値が17で割り切れるかを判定する
* @param {string} val
* @return {boolean} 割り切れるかどうか
*/
function isMultipleOfSeventeen(val) {
    return isMultipleOfAny(val, 17);
}

module.exports = {
    isMultipleOfSeventeen
}
