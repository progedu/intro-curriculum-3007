'use strict';
/**
 * 17の倍数の場合、true
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
