'use strict';

/**
 * 17で割れるかどうかを判定する
 * @param {number} seventeen
 */
function isMultipleOfSeventeen(seventeen) {
    if (seventeen % 17 === 0) {
        return seventeen;
    }
}


module.exports = {
    isMultipleOfSeventeen
}
