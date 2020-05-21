'use strict';
/**
 * 整数を17で割り切れるか判定する
 * @param {number}} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
