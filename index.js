'use strict';

/**
 * 17で割り切れる数字を返す
 * @param {int} num
 * @returns {int} 17で割り切れるものを返す
 */
function isMultipleOfSeventeen(num){
        return num % 17 == 0
};


module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}
