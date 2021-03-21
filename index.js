'use strict';

/*
 * 17で割りきれるかの判定
 * @return {array} 17で割り切れる数値の配列
 */
function isMultipleOfSeventeen(num){
    return num%17===0;
}

module.exports = {
    isMultipleOfSeventeen
};
