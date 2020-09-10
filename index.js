'use strict';
/**
 * 17の倍数である場合 true を返す
 * @param {number} num 数値の配列 
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isMultipleOfSeventeen };