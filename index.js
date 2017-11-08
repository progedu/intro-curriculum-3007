'use strict';

/**
 * 整数が17で割り切れるかどうかを判定
 * @param {array} numbers
 * @return {boolean} 
 */
function isMultipleOfSeventeen (value) {
    return value % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
