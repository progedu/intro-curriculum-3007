'use strict';

/**
 * 17で割り切れる要素のみ返すisMultipleOfSeventeenの実装
 * @param {number} num
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
