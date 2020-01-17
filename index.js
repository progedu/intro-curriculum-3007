'use strict';
/**
* 17で割り切れる数のみを返す
* @param {number} number
* @return {boolean} 真偽
*/
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
