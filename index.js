'use strict';
/**
 * 与えられた整数が 17 で割り切れれば true を返す関数 isSeventeen
 * @param {number} n 
 */
function isSeventeen(n) {
    var rem = n % 17;
    if (rem === 0) {
        return true;
    }
} // まさか１行で書けるとは・・・ orz
module.exports = {
    isSeventeen: isSeventeen
}
