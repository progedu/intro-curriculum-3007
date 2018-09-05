'use strict';

/**
 * 配列に含まれる整数が17が割り切れるとき true を返す
 * @param (number) num
 */
function isMultipleOfSeventeen (num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
