'use strict';

/**
 * 数字を受け取り、17で割り切れる値かを返す
 * @param {number} num
 * @return {boolean} 17で割り切れるかの真偽
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
