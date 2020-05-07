'use strict';
/**
 * 与えたられた整数が17で割り切れるとき、trueを返す
 * @param {number} i
 */
function isMultipleOfSeventeen(i) {
    return i % 17 === 0;
}
module.exports = {
    isMultipleOfSeventeen
};