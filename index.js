'use strict';
/**
* 17で割り切れる場合 true を返す
* @param {num} numArray
*/
function isMultipleOfSeventeen(num){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
