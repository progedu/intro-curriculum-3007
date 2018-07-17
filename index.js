'use strict';

/**
 * 17で割り切れるかどうか
 * @param {number} number 
 */
function isMultipleOfSeventeen(num){
    return (num % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
