'use strict';
/**
 * 17で割り切れたらtrue,それ以外はfalse
 * @param {int} value
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(value) {
    if(value%17===0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen
}
