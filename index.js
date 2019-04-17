'use strict';

/**
 * 17の倍数かどうか判断する
 * @param {Integer} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};