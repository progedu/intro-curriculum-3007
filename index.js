'use strict';

/**
 * 配列に含まれる整数が 17 で割り切れるものだけを出力
 * @return {boolean}
 */
function isMultipleOfSeventeen(numbers){
    return (numbers % 17 === 0);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
