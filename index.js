'use strict';

//配列に含まれる整数が17で割り切れるものだけにするモジュールを実装

/**
 * 整数が17の倍数か判定する関数
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
