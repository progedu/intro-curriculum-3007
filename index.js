'use strict';

/**
 * 
 * １７の倍数である場合 true を返す
 * @param {number} n 
 */
function isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
