'use strict';

/*
*17の倍数である場合 true を返す
* @param {number} number
*/

function isMultipleOfSeventeen(number){
    if(number % 17 === 0){
        return true;
    }
    return false;
}


module.exports = {
    isMultipleOfSeventeen
}
