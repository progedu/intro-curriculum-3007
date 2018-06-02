'use strict';

// 整数が 17 で割り切れるかどうかを判定する関数
function isMultipleOfSeventeen(numbers)
{   
    return numbers % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen 
}
