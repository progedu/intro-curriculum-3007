'use strict';
/**
 * 17で割り切れたらtrueを返す
 * @param {number} num
 * @return {boolean} 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
}
