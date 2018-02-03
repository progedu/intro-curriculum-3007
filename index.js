'use strict';
/**
 * 引数が17の倍数かどうかを判定する
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return (num % 17 === 0);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
