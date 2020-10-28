'use strict';
const numbers = [];

/**
 *17の倍数をtrueで返す関数
 * @param {number} 数値
 * @return {bool} 
 */
function isMultipleOfSeventeen(number){
    return number % 17 == 0;

}

module.exports = { isMultipleOfSeventeen};