'use strict';
/**
 * 正の整数を受け取り、17の倍数かどうかを返す
 * @param {number} num 
 * @return {boolean} multiples of seventeen
 */
function isMultipleOfSeventeen(num){
    if (num % 17 === 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
