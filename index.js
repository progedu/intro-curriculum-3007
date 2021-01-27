'use strict';
/// <summary>
/// 整数が17で割り切れるかどうか判定する
/// </summary>
/// <param name="integer">整数</param>
function isMultipleOfSeventeen(integer) {
    return integer % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
