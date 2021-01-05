'use strict';
/**
 * number % 17 = 0　かどうか確認する関数
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}