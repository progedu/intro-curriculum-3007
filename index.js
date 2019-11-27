'use strict';

/**
* 入力された整数が17の倍数であるならば true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};