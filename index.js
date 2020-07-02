'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する関数
 * @param {int} n
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(n) {
    if (n % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
