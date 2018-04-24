'use strict';
/**
 * 17 で割り切れるかどうかを見て割り切れたら配列で返す
 * @return {array}
 */
function isMultipleOfSeventeen(num) {
    return num % 17 == 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
