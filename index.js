'use strict';

/**
 * 整数が17の倍数であるかどうかを判別する
 * @param {int} number
 * @return {bool}
 */
function isMultipleOfSeventeen(number) {
    if (number %17 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isMultipleOfSeventeen
}
