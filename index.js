'use strict';
/**
 * 配列に含まれる整数が 17 で割り切れるかどうかを判定しtrueを返す
 * @param {number} numbers
 * @return {array}
 */
function isMultipleOfSeventeen(numbers) {
    return numbers % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
