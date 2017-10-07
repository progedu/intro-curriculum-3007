'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} kazu
*/
function isMultipleOfSeventeen(kazu){
    if(kazu % 17 == 0){
        return true;
    }
    return false;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
