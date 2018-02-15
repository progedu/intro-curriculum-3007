'use strict';

/**
 * 引数（整数）が 17 で割り切れるかどうかを判定する
 * @param {number}
 * @return {boolean} 17 で割り切れるかどうか
 */
function isMultipleOfSeventeen(a){
    if (a <= 0 ) {
        return false;
    }
    return a % 17 ===0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
