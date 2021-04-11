'use strict';

/**
 * 17で割り切れるかどうか
 * @return {number} n
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
