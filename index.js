'use strict';
/**
 * 整数が17で割り切れるかを判定する
 * @param {int} number
 * @return {boolean} can
 */
function isMultipleOfSeventeen(number) {
    let can = false;
    if (number % 17 === 0) {
        can = true;
    }
    return can;
}

module.exports = {
    isMultipleOfSeventeen
}
