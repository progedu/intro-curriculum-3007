'use strict';

/**
 * 与えられた数値が17で割り切れるかどうか判定する
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
