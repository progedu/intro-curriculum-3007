'use strict';

/**
 * 17 で割り切れるならtrue
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
