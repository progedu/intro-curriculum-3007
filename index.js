'use strict';

/**
* 引数の値が 17 で割り切れるかどうかを判定する 
* @param {number} num
* @return {boolean} 17 で割り切れる場合 true
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
