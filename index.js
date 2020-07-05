'use strict';

// 配列内の数値が17で割り切れるか判定
// 割り切れない場合は、要素を削除

/**
 * 配列の処理を行う
 * @param {object} number 整数値の入った配列
 *  
 */
function isMultipleOfSeventeen(number){
    return number % 17 === 0
}

module.exports = {
    isMultipleOfSeventeen
}
