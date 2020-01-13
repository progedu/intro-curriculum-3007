'use strict';
/**
 * 17 で割り切れる場合 true を返す
 * @param {number} value
 * @return {boolean}
 */
function isMultipleOfSeventeen(value){
    return value % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
