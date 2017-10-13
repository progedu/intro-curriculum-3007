'use strict';

/**
 * 17で割り切れるかどうかを判定
 * @param {int} num
 * @return {boolean} 17で割り切れるか
 */
function isMultipleOfSeventeen (num){
    return num % 17 === 0;
}

/**
 * 17で割り切れる数値のみを抽出する
 * @param {array} nums
 * @return {array}
 */
function seventeen (nums){
    return nums.filter(isMultipleOfSeventeen);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
    seventeen: seventeen
}
