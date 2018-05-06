'use strict';

/**
 * number が17の倍数かどうかを判断する
 * @param {Int} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
