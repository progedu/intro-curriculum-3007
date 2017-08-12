'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {int} 整数
 */
function isSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
    isSeventeen : isSeventeen
}
