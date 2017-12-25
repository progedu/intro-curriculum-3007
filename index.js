'use strict';
/**
 * 配列に含まれる整数が 17 で割り切れるものだけを取得する
 * @param {array} array
 * @return {boolean} 割り切れるかどうか
 */

function isMultipleOfSeventeen(array){
    return array%17===0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
