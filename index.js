'use strict';

/**
 * 整数が17で割り切れるなら true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    // if (num % 17 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
