'use strict';
/**
 *  17の倍数である場合 true を返す
 * @param {Number} n 
 */
function  isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
