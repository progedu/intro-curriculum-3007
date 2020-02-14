'use strict';

/**
 * @param {number} num 整数
 * @return {boolean} 真偽
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true;
    }
    return false;
}

module.exports = {
    isMultipleOfSeventeen
}
