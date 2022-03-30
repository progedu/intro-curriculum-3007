'use strict';

/**
 * 受け取った整数が17で割り切れるかどうか判定する
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
