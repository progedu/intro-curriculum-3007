'use strict';

/**
 * 引数が17で割り切れるかどうか判定する関数
 * @param {number} number 
 * @return {boolean} 割り切れるときtrue
 */
function isMultipleOfSeventeen(number) {
    return !(number % 17);
}

module.exports = {
    isMultipleOfSeventeen
}
