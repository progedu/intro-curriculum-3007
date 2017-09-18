'use strict';

// 整数(num)が17で割り切れるとき true を返す
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
