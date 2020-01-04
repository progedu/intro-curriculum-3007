'use strict';

/**
 * 数値が17で割り切れればtrueを返す関数
 * @param {int} num 
 */
function isMultipleOfSeventeen(num){
    return num %17 ===0;
}

module.exports = {
    isMultipleOfSeventeen
}
