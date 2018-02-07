'use strict';
/**
 * 整数が17で割り切れるかどうかを返す
 * @param {number} num
 * @return {boolean} 割り切れるかどうか
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
