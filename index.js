'use strict';

/**
 * 配列を受け取り、17で割り切れる場合trueを返す
 * @param {*} array 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
