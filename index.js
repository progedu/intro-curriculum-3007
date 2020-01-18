'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する 割り切れる場合はtrueを返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen 
}
