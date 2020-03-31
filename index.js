'use strict';

/**
 * 17で割り切れる時、true を返す
 * @param {number} Number
 */
function isMultipleOfSeventeen(Number){
    return Number % 17 === 0;
}

module.exports = {isMultipleOfSeventeen}
