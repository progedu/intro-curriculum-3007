'use strict';

/**
 * 入力された値のうち17の倍数の値だけ戻す
 * @param {number} num 
 */

function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
