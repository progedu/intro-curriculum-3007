'use strict';
const tasks = new Map();
/**
 * 17 で割り切れるかどうかを判定
 * @param {number} num
 */

 function isMultipleOfSeventeen(num){
     return num % 17 === 0;
 }
module.exports = {
    isMultipleOfSeventeen
};
