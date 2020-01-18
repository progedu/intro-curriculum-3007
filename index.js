'use strict';

/**
 * 整数が17で割り切れるかどうかを判定．
 * @param {number} num 
 * @return {boolean} 17で割り切れたときはtrueを返却する．
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen,
}
