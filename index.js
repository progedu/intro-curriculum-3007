'use strict';

/**
 * 17で割り切れるかどうかを判定する関数
 * @param {number} number
 * @return {boolean} 割り切れるかどうか,割り切れるならtrue
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
