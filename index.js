'use strict';

/**
 * 指定された数が17の倍数かどうかを判定
 * @param {String} target 
 */
function isMultipleOfSeventeen(target) {
    return (target % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
