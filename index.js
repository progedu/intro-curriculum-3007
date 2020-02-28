'use strict';
/**
 * 17の倍数である場合trueを返す
 * @pram {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
