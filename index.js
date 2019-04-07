'use strict';

/**
 * 配列に含まれる整数を１７で割り切れるかどうか判定する
 */
function isMultipleOfSeventeen(number) {
    return (number % 17) === 0
}
module.exports = {
    isMultipleOfSeventeen
}
