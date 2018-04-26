'use strict';
/**
* 項目を削除する
* @param {int} 
* @return {boolean} 
*/
function isMultipleOfSeventeen(n) {
    if(n % 17 === 0)
        return true;
    else
        return false;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
