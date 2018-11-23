'use strict';
/**
 * 整数が17の倍数である場合trueを返す
 * @param {number} num
 */
function isMultipulOfSeventeen(num){
    return num % 17=== 0;
}

module.exports = {
    isMultipulOfSeventeen: isMultipulOfSeventeen
};