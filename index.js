'use strict';

/**
 * 17の倍数か判定する
 * @param {number} integer  
 */
function isMultipleOfSeventeen(integer) {
    return integer % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
