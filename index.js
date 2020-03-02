'use strict';
/**
 * 17の倍数の場合に true を返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
}
