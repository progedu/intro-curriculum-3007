'use strict';

/**
 * 整数が17で割り切れるかどうか判定する
 * (割り切れる：true, 割り切れない:false)
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};

