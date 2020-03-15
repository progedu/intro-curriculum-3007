'use strict';

/**
 * 整数が17で割り切れるか判定する
 * @param {int} n
 * @return {boolean} 
 */
function isMultipleOfSeventeen(n) {
    if (n % 17) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
