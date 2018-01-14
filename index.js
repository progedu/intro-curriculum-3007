'use strict';

/**
* 引数の整数が 17 で割り切れるものであれば true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
