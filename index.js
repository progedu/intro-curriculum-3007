'use strict';

/**
 * 整数を渡し、17 で割り切れるかの判定を返す
 * @param {array} 整数
 * @return {array} 17で割り切れるかの判定
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
