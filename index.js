'use strict';

/**
 * 17で割り切れる整数にTrueを返す。
 * @return {array} nums
 */
function isMultipleOfSeventeen(nums) {
  return nums % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
