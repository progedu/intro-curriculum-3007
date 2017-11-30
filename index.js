'use strict';

/**
 * 17で割り切れるかどうかを判定する
 * @param {int} i
 */
function isMultipleOfSeventeen(i){
    return ( i % 17 ) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
