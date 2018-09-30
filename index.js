'use strict';

/* 配列に含まれる整数が 17 で割り切れるものだけにする seventeen モジュールを実装しています。
そのために、整数が 17 で割り切れるかどうかを判定する isMultipleOfSeventeen 関数を
seventeen モジュールに実装してください。 */

function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
