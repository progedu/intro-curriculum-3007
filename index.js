'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} value
*/
function isSeventeen(value) {
    return value % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
}
