'use strict';
/**
 * 17で割り切れる
 * @params {integer} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
}