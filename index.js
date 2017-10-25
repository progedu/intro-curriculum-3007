'use strict';

/**
 * 引数の整数が17で割り切れるか
 * @param {integer} number 
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
