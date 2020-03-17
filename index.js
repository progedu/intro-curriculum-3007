'use strict';

/**
 * 配列に含まれる整数を17で割り切れるものだけにする
 * @param {number} num
 */
function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
