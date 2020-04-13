'use strict';

/**
 * 17で割り切れるかどうかの判定
 * @param {int} number
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
