'use strict';
// 17の倍数かどうか
// @return {boolean}
function isMultipleOfSeventeen(num) {
    return (num%17 === 0);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
