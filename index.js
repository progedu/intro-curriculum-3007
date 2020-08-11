'use strict';

/***
 * 17で割り切れる場合Trueを返す。
 * @param {Array} 
 * @return 
 */
function isMultipleOfSeventeen(num) {
    return (num % 17 === 0);
}


module.exports = {
    isMultipleOfSeventeen
}
