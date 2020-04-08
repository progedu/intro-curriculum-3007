'use strict';
/**
 * 17の倍数かどうかを判定する
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    } else {
        return false;
    }
}
module.exports = {
    isMultipleOfSeventeen
}
