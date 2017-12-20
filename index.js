'use strict';

/* 
* 整数が 17 で割り切れるかどうかを判定する
* @param {number} n
* @return {boolean}
*/

function isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}

