'use strict';

/**
 * 整数を受け取り、17で割り切れるかどうかを返す
 * @param {number} num
 * @return {boolean} 17で割り切れるかどうかの真偽値
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
