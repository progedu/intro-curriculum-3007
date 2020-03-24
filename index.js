'use strict';

/**
 * @param {number} num
 * @return {boolean} 17で割り切りれるかどうか
 */
function isMultipleOfSeventeen(num) {
    return !(num % 17);
}

module.exports = {
    isMultipleOfSeventeen
};
