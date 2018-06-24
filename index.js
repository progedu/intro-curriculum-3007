'use strict';

function isMultipleOfSeventeen(num) {
    // 17で割り切れるなら要素を吐き出す
    return num % 17 === 0;
    }

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
