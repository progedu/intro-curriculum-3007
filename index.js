'use strict';

/**
 * 値が17の倍数ならTrueを返す
 * @param {number} num
 * @return {boolean} 値が17の倍数かどうかの真偽値
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
