'use strict';

/**
 * 17で割り切れるかどうか判定する
 * @param {int} n
 * @return {boolean}
 */
function isMultipleOfSeventeen(n) {
    if (n % 17 === 0){
        return true;
    };
}

/**
 * 配列に含まれている整数を17で割り切れるものだけにする
 * @param {array} numlist
 * @return {array} 
 */
function seventeen(numlist) {
    return numlist.filter(isMultipleOfSeventeen);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
    seventeen: seventeen
}
