'use strict';

/**１７で割り切れる場合だけtureを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
