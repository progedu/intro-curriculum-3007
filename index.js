'use strict';
/**
 * 17の倍数ならtrue
 * @param {number} num 
 */

function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
