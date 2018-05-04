'use strict';

/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} intNum 
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(intNum) {
    return (intNum % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
