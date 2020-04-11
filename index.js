'use strict';
// 17の倍数であるかを返す（true）
// @param {number} num
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
