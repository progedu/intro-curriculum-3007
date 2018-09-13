'use strict';

// 17で割り切れる場合に数値を返す
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return num;
    }
}

module.exports = {
    isMultipleOfSeventeen:  isMultipleOfSeventeen
}