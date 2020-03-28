'use strict';
/**
 * 配列に含まれる数が17でわりきれるかどうかを判定する
 * @param {array} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
