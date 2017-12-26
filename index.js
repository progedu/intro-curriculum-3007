'use strict';

/**
* 整数が 17 で割り切れるかどうか を返す
* @param {number} num
* @return {boolean} 完了したかどうか
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}

