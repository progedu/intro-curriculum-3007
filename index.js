'use strict';

/**
 * 17で割り切れたらtrueを返す
 * @return {boolean} 17で割り切れるか否か
 */
function isMultipleOfSeventeen(num){
    return (num % 17 ===0);
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
