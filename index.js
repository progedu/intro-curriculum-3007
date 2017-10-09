'use strict';

/**
 * 17で割り切れる場合にtrueを返却する
 * @param {number} number 
 */
function isMultipleOfSeventeen(number){
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen 
}
