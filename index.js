'use strict';


/**
 * 17の倍数であるならtrueを返す
 * @param {number} number 
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen    
}
