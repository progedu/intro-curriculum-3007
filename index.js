'use strict';
/**
 * 17で割りきれる場合 true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
