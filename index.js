'use strict';
/**
 * １７で割り切れるかどうか判定する。
 * @return {number} 
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
