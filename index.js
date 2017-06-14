'use strict';
/**
 * 17の倍数の時 true を返す
 * @param {num} num
 */

function isSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isSeventeen : isSeventeen
};
