'use strict';

/**
* 整数を受け取り、17 で割り切れるか否かを返す
* @param {number} num
* @return {boolean} 17 で割り切れるか否か
*/
function isMultipleOfSeventeen(num) {
    return num%17===0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
