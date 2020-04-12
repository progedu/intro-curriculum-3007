'use strict';

/**
 * 引数で受け取った値が17で割り切れるかどうかを判定
 * true: 割り切れる
 * false: 割り切れない
 * @param {number} num
 */
function isMultipleOfSeventeen(number) {
    return number % 17 == 0
}

module.exports = { isMultipleOfSeventeen }
