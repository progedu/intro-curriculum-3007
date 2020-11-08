'use strict';
//
/**
 * 渡された整数が17で割り切れるかを判定
 * @param {int}param
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(param){
    return !(param % 17)
}
module.exports = {
    isMultipleOfSeventeen
};
