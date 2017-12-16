'use strict';

/**
 * 与えられた数が17で割り切れるかどうかを返す
 * @param{init} n
 * @return{boolean}
 */

function isMultipleOfSeventeen(n){
    if (n % 17 === 0) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
