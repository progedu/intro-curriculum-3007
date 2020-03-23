'use strict';

/**
 * 与えられた整数が17で割り切れるかどうか判定する
 * @param {int} num
 * @return  {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = {
    isMultipleOfSeventeen
}
