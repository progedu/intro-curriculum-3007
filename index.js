'use strict';

/**
 * 引数の整数が 17 で割り切れるかどうかを返す
 * @param num 
 * @return {boolean}17かどうか
 */
function isMultipleOfSeventeen(num){
    return num %17 ===0 ;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
