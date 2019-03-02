'use strict';
/**
* 配列に含まれる整数が17で割り切れるものだけにする。
* @param {number} integer
*/
function isMultipleOfSeventeen (integer){
    return integer % 17 == 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};