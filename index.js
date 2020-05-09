'use strict';

/**
 * 与えられた整数が17で割り切れるかどうかを判定する
 * @param {number} integer
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(integer) {
    return integer % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
