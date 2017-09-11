'use strict';

/**
 * 整数を受け取り、17で割り切れるかどうかを返す
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
}
