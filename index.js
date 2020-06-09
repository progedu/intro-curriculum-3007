'use strict';

/** 
 * 17で割り切れたらtrueを返す
 * @param {number}
 */
function isMultipleOfSeventeen(number){
    return number % 17 === 0
}
module.exports = {
    isMultipleOfSeventeen
}
