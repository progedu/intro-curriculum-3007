'use strict';

/**
 * @param {int} n
 * @return {boolean} 17で割り切れる場合trueを返す
 */
function  isMultipleOfSeventeen(n) {
    if ((n % 17) === 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
