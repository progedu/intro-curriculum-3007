'use strict';

/**
 * 整数が17で割り切れるかを判定する
 * @param {int} number
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
