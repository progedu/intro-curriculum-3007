'use strict';

/**
* 17で割り切れるかを判定する
* @param {number} numeric
*/
function isMultipleOfSeventeen(numeric) {
    return numeric % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
