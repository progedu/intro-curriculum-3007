'use strict';
/**
 * 17の倍数の場合、trueで返す
 * @param {array} 任意の配列
 * @return {array}17で割り切れる数字のみが格納された配列
 */

function isMultipleOfSeventeen(n){
    return n % 17 == 0;
}



module.exports = {
    isMultipleOfSeventeen
};

