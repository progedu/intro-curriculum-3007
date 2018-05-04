'use strict';

/**
* 整数を受け取り、17で割り切れるものだけを返す
* @param {number} number
* @return {number}
*/
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

// seventeenモジュールに実装する関数を記述
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
