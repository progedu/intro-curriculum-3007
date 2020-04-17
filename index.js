'use strict';

/**
 * 配列の要素が17で割り切れるか判定する
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
