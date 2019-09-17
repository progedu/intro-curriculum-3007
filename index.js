'use strict';

/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num%17===0;
}
module.exports = {
    isMultipleOfSeventeen
};

//○間違い解答
// /**
//  * 割り切れるか判断
//  * @return {boolean}
//  */
// function warikireru(suji){
//     if(suji%17===0)
//     return true;
// }

// /**
//  * 配列に含まれる整数が 17 で割り切れるものだけにする
//  *@param {array} hairetu
//  */
// function isMultipleOfSeventeen(hairetu){
//     return Array.from(hairetu).filter(warikireru);
// }
