'use strict';


/**
 * 入力された整数が、17で割り切れるかどうかを判定する
 * @param {array} input
 * @return {boolean}
 */
function isMultipleOfSeventeen(input){
    return input % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
