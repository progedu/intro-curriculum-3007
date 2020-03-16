'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {int} value
 * @return {boolean} 
 */
function isMultipleOfSeventeen(value){
    return value % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
