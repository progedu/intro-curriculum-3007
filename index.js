'use strict';
/**
 * 17の倍数であるかを判定する。
 * @param {number} num
 * @return {boolean} 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
