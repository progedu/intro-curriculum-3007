'use strict';
/**
 * 17の倍数の場合に真を返す関数　17で割りあまり0
 * @param {number} num  数値型の引数
 */


function  isMultipleOfSeventeen(num) {
    return num % 17 === 0;   
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};