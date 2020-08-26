'use strict';
/**
 * 17で割れる数だけを配列にするやつ
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
