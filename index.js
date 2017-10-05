'use strict';

/**
* 17で割り切れるかを返す
* @param {Int} num
* @return {boolean} 17で割り切れるか
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
};

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
