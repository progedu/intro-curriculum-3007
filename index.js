'use strict';
/**
 * 17の倍数かどうかを判定するっs
 * @param {string} para 
 */
function  isMultipleOfSeventeen(para){
    return para % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
