'use strict';
/**
 * 17 の倍数の時に真を返す関数
 * @param {number}
 */
function isMultipleOfSeventeen(num) {
    return num%17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
