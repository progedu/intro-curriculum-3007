'use strict';
/**
 * 17の倍数である時にtrueを返す
 * @param {number} nums 
 */

function isMultipleOfSeventeen(nums) {
    return nums % 17 === 0;
};

module.exports = { isMultipleOfSeventeen }
