'use strict';
/**
*  
* @param {int} data
* @return {boolean} 17で割り切れるかどうか
*/
function isMultipleOfSeventeen(data){
    return data % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
