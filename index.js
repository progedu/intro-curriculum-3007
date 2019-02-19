'use strict';

/**
 * 配列が含まれる整数が17で割り切れるものだけにする
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
