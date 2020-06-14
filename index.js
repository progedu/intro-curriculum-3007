'use strict';
const nums = new Array();

/**
 * 17の倍数の真偽値を返す
 * @param {Number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
