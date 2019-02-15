'use strict';
/**
 * 整数を受け取り、17で割り切れるものを返す
 * @param {array} number
 * @return {int} 17で割り切れる数
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 == 0) {
        return number;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
