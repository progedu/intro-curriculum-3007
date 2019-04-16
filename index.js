'use strict';
/**
 * 配列に含まれる整数が17の倍数か判定する
 * @param {array} isSeventeen
 * @return {boolen}
 */
function isMultipleOfSeventeen(isSeventeen){
    if(isSeventeen % 17 === 0){
        return true;
    }else{
        return false;
    }
}
module.exports = {
    isMultipleOfSeventeen
}
