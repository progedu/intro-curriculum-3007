'use strict'; 
/**
* 整数が 17 で割り切れるかどうかを判定する
* @return {array}
*/
function isMultipleOfSeventeen(n) {
    console.log(n, n % 17 === 0)
    return n % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
