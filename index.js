'use strict';

/**
 * 整数が17で割り切れる場合にtrueを返す
 * @param {num} num
 */
function isMultipleOfSeventeen(num){
    return (num % 17 === 0);
}

module.exports = {
    isMultipleOfSeventeen
}
