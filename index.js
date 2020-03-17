'use strict';

/**
 * 配列に入っている要素から,17で割り切れる者だけを取り出す
 * @param {int}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
};
