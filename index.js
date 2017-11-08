'use strict';

/**
 * 整数が17で割り切れるかどうかを判定
 * @param {array} value
 */
function isMultipleOfSeventeen (value) {
    return value % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
