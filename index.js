'use strict';
/**
 * 17で割り切れるかどうかを判定する
 * @param {number} num
 * @return {boolean} 17で割り切れる物のみ
 */
function isMultipleOfSeventeen(num) {
    return num % 17 ===0;
}

module.exports = {
    isMultipleOfSeventeen
};
