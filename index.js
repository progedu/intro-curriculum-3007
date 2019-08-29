'use strict';
/**
 * 配列に含まれる整数が17で割り切れる条件式を返す
 * @return {string} 
 */
var isMultipleOfSeventeen = (number) => { 
    return number % 17 == 0;
}
module.exports = {
    isMultipleOfSeventeen
}
