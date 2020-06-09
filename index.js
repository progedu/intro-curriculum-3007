'use strict';
/**
 *  17 の倍数である場合に true を返す
 *  @param {number} num
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return num
    }
}

module.exports = { 
    isMultipleOfSeventeen
}
