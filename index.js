'use strict';

/**
 * numが17で割り切れるかどうかを判定
 * @param  {int} num
 * @return {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
}
