'use strict';

/**
 * 配列を取得し、17で割り切れる数字のみの配列を作成
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
    return num%17===0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
