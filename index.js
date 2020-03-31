'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {string} numbers
 */
function isMultipleOfSeventeen(numbers){
    return numbers % 17 ==0;
}

module.exports = {
    isMultipleOfSeventeen
}
