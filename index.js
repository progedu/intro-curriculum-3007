'use strict';

/**
 * 17で割り切れるかどうかをチェックする
 * @param {number} number 
 * @return {boolean} 17で割り切れる場合:true 割り切れない場合:false
 */
function isMultipleOfSeventeen(number) {
    return (number % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
