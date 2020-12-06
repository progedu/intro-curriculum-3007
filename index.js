'use strict';

/**
 * 17で割り切れるか判定する
 * @param {object} number
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
