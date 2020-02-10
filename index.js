'use strict';
/**
 * 17で割り切れる数を計算する
 * @param {string} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
};
