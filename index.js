'use strict';

/**
 * 整数が 17 で割り切れるかどうかを判定する 
 * @param {int} 整数
 * @return {boolean} 整数が 17 で割り切れるかどうか
 */
function isMultipleOfSeventeen(int){
    return int % 17 === 0;
}

module.exports = {isMultipleOfSeventeen
}
