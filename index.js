'use strict';

/**
 * 17の倍数の時trueを返す
 * @param {array} numbers
 */

 function isMultipleOfSeventeen(numbers) {
     return numbers % 17 === 0;
 }
module.exports = {
    isMultipleOfSeventeen
}
