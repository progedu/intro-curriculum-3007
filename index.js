'use strict';

/**
 * 17で割り切れる数字を判定する
 * @param {number} 
 * @return {boolean} : split of 17
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0 ? true : false;
}

module.exports = {isMultipleOfSeventeen}
