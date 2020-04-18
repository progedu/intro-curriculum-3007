'use strict';

/**
 * 整数を受け取り, 17で割り切れるかを返す
 * @param {int} value
 * @return {boolean} 17で割り切れるか
 */
function isMultipleOfSeventeen(value) {
    return (value % 17 === 0);
}

module.exports = {
    isMultipleOfSeventeen
}
