'use strict';
/** 
 * 17の倍数ならtrueを返す
 * @param {num} num
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
