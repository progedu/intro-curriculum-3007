'use strict';

/**
 * 整数を受け取って17で割り切れるかどうかを返す
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen
}
