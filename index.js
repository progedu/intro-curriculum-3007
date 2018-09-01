'use strict';

/**
 * 17で割り切れるかを返す
 * @param {int} tgt
 */
function isMultipleOfSeventeen(tgt) {
    return tgt % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
