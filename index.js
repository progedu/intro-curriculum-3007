'use strict';
/**
* 17の倍数ならば true を返す
* @param {number} num
*/
function isSeventeen(num) {
    return num % 17 === 0;
}
module.exports = {
    isSeventeen: isSeventeen
};
