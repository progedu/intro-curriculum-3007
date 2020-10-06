'use strict';
/**
 * 17の倍数をtrue をで返す関数
 * @param {number} 数値
 * @return {bool}
 */
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
