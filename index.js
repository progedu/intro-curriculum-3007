'use strict';

/**
 * 整数が 17 で割り切れるかどうか
 * @param {number} number
 * @return {boolean} 整数が 17 で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    if( number % 17 === 0)
    {
        return true;
    }
    return false;
}
module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
