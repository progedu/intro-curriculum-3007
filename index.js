'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する 
 * @param {number} num 
 * @returns {boolean} 割り切れるかどうか　true:割り切れる　false:割り切れない
 */
function isMultipleOfSeventeen(num){
    return num%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
