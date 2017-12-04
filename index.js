'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {int} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 == 0) {
        return true;
    }
    return false;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
