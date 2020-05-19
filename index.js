'use strict';

/**
* 17で割り切れるか判定する
* @param {int} number
*/
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
