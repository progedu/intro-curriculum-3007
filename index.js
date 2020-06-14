'use strict';


/**
 * 17で割り切れるかどうかを判定する
 * @param {integer} number 
 */
function isMultipleOfSeventeen(number) {
    let numbers = [];
    if(number % 17 === 0) {
        numbers.push(number);
        return numbers;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
