'use strict';

/**
 * 17で割り切れる数字ならtrueを返す
 * @param {int} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
