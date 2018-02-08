'use strict';

/**
 * 数値が17で割り切れるかを判定する
 * @param {int}
 */
function isMultipleOfSeventeen(num){
    return (num % 17)===0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
