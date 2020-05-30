'use strict';
/**
 * 17の倍数である場合 true を返す
 * @return {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
