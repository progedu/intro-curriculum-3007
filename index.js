'use strict';

/**
 * 整数が17で割り切れるかどうか判定する関数
 * @param {int} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0
}

module.exports = {isMultipleOfSeventeen }
