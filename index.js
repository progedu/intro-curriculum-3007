'use strict';

/**
 * 17で割り切れる数値を true で返す
 * @param {Number} num 
 * @return {Boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen }
