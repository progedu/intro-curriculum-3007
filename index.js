'use strict';

//整数が１７でわりきれるかどうかを判定する
function isMultipleOfSeventeen(value) {
    return value % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
