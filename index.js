'use strict';
/**
 * 17の倍数である場合trueを返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
