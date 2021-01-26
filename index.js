'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} num
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
    return false;
}

module.exports = { isMultipleOfSeventeen
};