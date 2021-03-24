'use strict';

/**
 * 引数が17で割り切れるかどうか判定する
 * @param {number} number
 * @return {boolean} 割り切れたかどうか
 */
function isMultipleOfSeventeen(number) {
    const result = number % 17;
    if(result === 0){
        return true;
    }
}

module.exports = {isMultipleOfSeventeen};
