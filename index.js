'use strict';

/**
 * 17で割り切れるかの判定
 * @param num
 */
function isMultipleOfSeventeen (num) {
    if (num % 17 === 0) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
