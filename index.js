'use strict';

/**
* 17の倍数の場合にtrue, それ以外はfalseを返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
    if(num % 17 === 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
