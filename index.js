
'use strict';

/** 
* 整数が 17 で割り切れるかどうかを判定
* @param {int} num
* 
* @return {boolean}
*/
function isMultipleOfSeventeen(num){
    return num % 17 === 0;

}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
