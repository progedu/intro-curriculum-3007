'use strict';
/**
 * 17で割り切れる値の場合のみtrueとする
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
}
