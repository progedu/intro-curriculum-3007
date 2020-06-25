'use strict';

/**
 * 17で割り切れる場合、TRUEの値を返す
 * @param {number} number
 */
function isMultipleOfSeventeen(number){
    return number % 17 === 0;   
}

module.exports = {
    isMultipleOfSeventeen
}
