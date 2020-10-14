'use strict';

/**
 * 17の倍数である場合 true を返す
 * @param {namber} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
