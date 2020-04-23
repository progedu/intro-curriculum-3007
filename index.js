'use strict';
const numbers = new Map();

/**
 * 17 で割りきれるとき、tureを返す
 * @param {numbber} numbers 
 */
function isMultipleOfSeventeen(numbers) {
    return numbers % 17 === 0;
} 

module.exports = {
    isMultipleOfSeventeen
}
