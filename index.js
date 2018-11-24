'use strict';

/**
* inputが17の倍数ならtrueを返す
* @param {number} input
*/
function isMultipleOfSeventeen(input) {
    return input % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen 
}
