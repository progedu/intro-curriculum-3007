'use strict';

/**
 * 17の倍数である場合にtrueを返す
 * @param {number} num
 * @return {boolean} 
 */

function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
