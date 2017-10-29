'use strict';

/**
 * 17で割り切れたら整数を返す
 * @param {int} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
