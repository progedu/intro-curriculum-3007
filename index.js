//入門３－７練習

'use strict';

/**
 * 17で割り切れた場合、trueを返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
