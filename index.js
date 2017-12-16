'use strict';

/**
 * 与えられた数が17で割り切れるかどうかを返す
 * @param{init} n
 * @return{boolean}
 */

function isMultipleOfSeventeen(n){
    return n % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
