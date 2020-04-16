'use strict';
/**
 * 17の倍数であれば true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    const judge = (num % 17 === 0);
    return judge;
}

module.exports = {
    isMultipleOfSeventeen
}
