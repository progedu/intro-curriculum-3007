'use strict';

/**
 * 整数が17で割り切れるかを判定する
 * @param {int} input
 * @return {boolean} output
 */
function isMultipleOfSeventeen (input) {
    if (input % 17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
