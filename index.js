'use strict';
/**
 * 整数が17で割り切れるか判定する
 * @param {number} n
 * @return {boolean} 割り切れるかどうか
 */
function isSeventeen(n) {
    return n % 17 === 0;
}
module.exports = {
    isSeventeen : isSeventeen
};
