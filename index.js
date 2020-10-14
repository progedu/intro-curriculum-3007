'use strict';

/**
 * 17の倍数をtrueで返す関数
 * @param {number} 数値
 * @returns {boolean} 真偽値 
 */

function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = { isMultipleOfSeventeen
}
