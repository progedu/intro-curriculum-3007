'use strict';
/**
 * 整数が17で割り切れるかどうかを判定する
 * @param {number} num
 * @return 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    //自分の答え
    //const isMultipleOfSeventeen = num % 17;
    //return (isMultipleOfSeventeen === 0) ? true : false;
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
