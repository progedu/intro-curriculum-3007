'use strict';
/**
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    if(num % 17 === 0){
        return true;
    }
    return false;
}
module.exports = {
    isMultipleOfSeventeen
}
