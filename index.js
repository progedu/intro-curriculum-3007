'use strict';

/**
 * 数値を受け取って17で割り切れるならtrue, でないならfalse返却
 * @param {int} num 
 * @return {boolean}
 */
function isSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
};
