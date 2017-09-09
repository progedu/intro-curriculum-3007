'use strict';

/**
 * 17で割り切れるかどうかを判断
 * @param {number} number
 */
function isSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
};