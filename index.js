'use strict';
/**
 * 整数が 17 で割り切れるかどうかを判定する
 * @param {int} number
 * @return {Boolean} 割り切れたらtrue
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 == 0) {
        return true;
    }else {
        return false;
    }
}

module.exports = { isMultipleOfSeventeen }
