'use strict';

/**
 * 整数が17で割り切れるかを取得
 * @param {int} number
 * @return {bool} true:割り切れる / false:割り切れない
 */
function isMultipleOfSeventeen(number){
    return 0 === number % 17;
}

module.exports = { isMultipleOfSeventeen };
