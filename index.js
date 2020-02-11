'use strict';

/**
* 数値を受け取る
* @param {array} nums
* @return {boolean} 割り切れるか否か
*/
function isMultipleOfSeventeen(nums) {
    let result = nums % 17;
    if (result === 0) {
        return true;
    } 
        return false;
}

module.exports = {
    isMultipleOfSeventeen
};
