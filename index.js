'use strict';

/**
 * 配列要素が17で割り切れるか判定する.
 * @param {int} item 
 */
function isMultipleOfSeventeen(item) {
    return item % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
