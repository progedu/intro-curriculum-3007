'use strict';
/**
* 17で割り切れる場合、trueを返す
* @param {number} numb
* @return {boolean} 割り切れるかどうか
*/
function isMultipleOfSeventeen(numb) {
    return numb % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
