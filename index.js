'use strict';
/**
 * 17の倍数である場合 trueを 返す
 * @param {number} num
 */
const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];

function isMultipleOfSeventeen (num){
     return num % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
};
