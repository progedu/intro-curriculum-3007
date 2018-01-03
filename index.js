'use strict';

/**
 * 受け取った配列に含まれる整数が17で割り切れるかを返す
 * @param {intNumber} 整数
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(intNumber) {
        return intNumber % 17 === 0;
    };

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
