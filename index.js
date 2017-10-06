'use strict';
/**
 * 17で割り切れる場合　true　を返す。
 * @param {Number} num
*/
function isMultipleOfSeventeen(num) {
    // console.log(num + "%17=" + (num % 17));
    return num % 17===0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
