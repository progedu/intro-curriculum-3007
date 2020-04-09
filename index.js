'use strict';

/**
 * @param num {int} 割り切れるか判断する数字
 * @returns {boolean} 割り切れるかどうかの真偽値  
 */
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return true
    }
    return false
}

module.exports = {
    isMultipleOfSeventeen
}
