'use strict';

/**
 * 整数が17で割り切れるか判定する
 * @param {num}
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return ((num % 17) === 0);
}

module.exports = {
    isMultipleOfSeventeen
}