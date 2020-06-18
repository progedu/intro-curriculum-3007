'use strict';

/**
 * 渡された数値が17で割り切れるか確認 
 * @param {number}
 * @returns {boolean}
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
