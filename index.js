'use strict';

/**
 * 配列に含まれる整数が17で割り切れるか判定
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {

    if (num % 17 === 0) {
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen:isMultipleOfSeventeen
}
