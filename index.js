'use strict';
/**
 * 17で割り切れるか
 * @param {number} number 
 */

function isMultipleOfSeventeen(number){
    return number % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
