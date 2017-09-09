'use strict';
// 17の倍数なら true を返す
function isSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
};