'use strict';
/**
 * 17の倍数のとき true を返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
