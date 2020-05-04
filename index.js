'use strict';
/**
 * 17で割り切れるかを調べる関数
 * @param {number} num  (調べる値)
 * @return 割り切れるかどうか（true: 割り切れる, false: 割り切れない)
 */
function isMultipleOfSeventeen(num){
    return num%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
