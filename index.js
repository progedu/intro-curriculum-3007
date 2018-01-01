'use strict';

/**
 *  整数が１７で割り切れるかどうか判定する
 * @param {number} number 
 */
function isMultipleOfSeventeen(number){
    return (number % 17) === 0
}

module.exports = {
    isMultipleOfSeventeen:isMultipleOfSeventeen
}
