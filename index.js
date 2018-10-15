'use strict';

/**
 * 17で割り切れる場合はtrueを返却する
 * @param {number} num
 * @return {boolean} 17で割り切れる場合はtrue,割り切れない場合はfalse
 */
function isMultipleOfSeventeen(num){
    return num % 17 == 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
};
