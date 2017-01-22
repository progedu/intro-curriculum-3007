'use strict';
/**
 * 17で割り切れるものはtureを返すモジュール
 */
function isSeventeen(n) {
    return n % 17 === 0; // ここでtureを返す
}


module.exports = {
    isSeventeen: isSeventeen
}
