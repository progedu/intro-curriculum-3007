'use strict';

/**
 * 17で割り切れるかを判定する関数isMultipleOfSeventeen
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
