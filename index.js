'use strict';

/**
* 整数が 17 で割り切れるかどうかを判定する入力値を17で割った時の余りが 0 になる時だけ true を返す
* @param {number} number
* @return {boolean} 17で割り切れるかどうかの真偽値
*/
function isMultipleOfSeventeen(number) {
    return number % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
