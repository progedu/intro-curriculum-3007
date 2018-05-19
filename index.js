'use strict';

/**
* isMultipleOfSeventeenを追加する
* @param {string} intValue
* @return {boolean} 17で割り切れるか
*/
function isMultipleOfSeventeen(intValue) {
    if(intValue % 17 === 0){
        return true;
    }　else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
