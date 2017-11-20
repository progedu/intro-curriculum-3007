'use strict';

/**
 * 整数が2で割り切れるかどうかを判定する
 * @param {num} 
 * @return {boolean} 2で割り切れるかどうか
 */
function isMultipleOfTwo(num) {
    return num % 2 == 0;
}

/**
* 整数が3で割り切れるかどうかを判定する
* @param {num} 
* @return {boolean} 3で割り切れるかどうか
*/
function isMultipleOfThree(num) {
    return num % 3 == 0;
}

module.exports = {
    isMultipleOfTwo: isMultipleOfTwo,
    isMultipleOfThree: isMultipleOfThree
}