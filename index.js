'use strict';

/**
 * 数値配列から受け取った数値が17の倍数ならばtrueを返す関数
 * @param {number} number 
 */
function isMultipleOfSeventeen (number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
