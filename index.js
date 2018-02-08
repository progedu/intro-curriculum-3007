'use strict';

/**
 * 17の倍数で割り切れる整数のみtrueにする
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
