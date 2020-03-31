'use strict';
/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * @param {array} number 整数
 */

function isMultipleOfSeventeen(number) {
    return number%17 === 0;
}
 

module.exports = { isMultipleOfSeventeen };
