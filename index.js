'use strict';

/**
* 整数の配列を受け取り、17で割り切れるかを返す
* @param {array} num
* @return {boolean} 17で割り切れるかどうか
*/
function isMultipleOfSeventeen(num) {
    if (num % 17 === 0){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
