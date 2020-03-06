'use strict';

/**
 * 17の倍数であれば true を返す
 * @param {int} number
 * @return {boolean}
 */
function isMultipleOfSeventeen(number){
    return (number % 17 === 0);
}

module.exports = {
    isMultipleOfSeventeen
}
