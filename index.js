'use strict';
/**
 * 17で割り切れる場合 true を返す関数
 * @param {number} num 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen,
}
