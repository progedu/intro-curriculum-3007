'use strict';

/**
 * 17 で割り切れる場合、True を返します
 * @param {number} num
 */
function isSeventeen(num) {
    return (num % 17 === 0);
}

module.exports = {
    isSeventeen: isSeventeen
}
