'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {Number} num
 * @return {boolean} 17で割り切れるか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
