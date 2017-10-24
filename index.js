'use strict';

/**
 * 整数が 17 で割り切れる場合Trueを返す
 * @param {number} num 
 */
/*
 function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
*/
module.exports = {
    isMultipleOfSeventeen: num => num % 17 === 0
}