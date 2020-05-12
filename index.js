'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} number
 * @return {boolen} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
