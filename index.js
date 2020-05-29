'use strict';

/**整数が17で割り切れるか判定する
 * @param {number} num
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(number) {
    if (number % 17 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
