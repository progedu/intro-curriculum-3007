'use strict';

/**
 * 配列に含まれる整数が17で割り切れるかどうかを判定する
 * @param {array} nums
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
