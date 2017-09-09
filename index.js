'use strict';

/**
 * 整数が17で割り切れるかどうかを返す
 * @param {integer} i
 * @return {boolean} 17で割り切れるかどうか
 */
function isSeventeen(i) {
    return i % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
};
