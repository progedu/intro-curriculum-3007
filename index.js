'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    if((num % 17) === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isMultipleOfSeventeen }
