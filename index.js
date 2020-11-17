'use strict';
/**
 * 17の倍数を返す
 * @param {number} num
 * @return {bool}
 */
function isMultipleOfSeventeen(num) {
return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
