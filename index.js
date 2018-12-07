'use strict';
function isMultipleOfSeventeen (n) {
    // 17で割り切れれば真、そうでなければ偽を返す
    return n % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
