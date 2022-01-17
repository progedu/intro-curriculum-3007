'use strict';
/**
 * 配列を受け取って、要素を17で割り切れるものだけにする
 * @param {number}
 * @return {boolean}
 */
function isMultipleOfSeventeen(num) {
    return num%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
