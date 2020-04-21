'use strict';
/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * @param {Number}
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
};
