'use strict';
/**
 * 17 で割り切り切れる場合、True
 * @param {number} number
 * */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
