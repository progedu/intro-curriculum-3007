'use strict';

/**
 * 17の倍数の場合はtrueを返す
 * @return {number} n
 */
function isMultipleOfSeventeen(n){
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
