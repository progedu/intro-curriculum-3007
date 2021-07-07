'use strict';

/**
 * 17割り切れるかどうかを判定する
 * @param {number} number
 * @return {boolean} 17で割り切れたらtrue
 */
function isMultipleOfSeventeen(number) {
    return (number % 17 === 0)
}

module.exports = { isMultipleOfSeventeen };