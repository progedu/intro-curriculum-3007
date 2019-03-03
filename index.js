'use strict';

/**
 * 17で割り切れるかどうかを返却する
 * @param {number} n 
 * @return {boolean} 割り切れる場合:true
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
