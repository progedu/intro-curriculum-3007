'use strict';
// 配列に含まれる整数が 17 で割り切れるものだけにする seventeen モジュールを実装しています。
// そのために、整数が 17 で割り切れるかどうかを判定する isMultipleOfSeventeen 関数を seventeen モジュールに実装してください。

/**
 * 整数が 17 で割り切れるかどうかを判定
 * @param {string} number 判定対象の数値
 * @return {boolean} 
 */
function isMultipleOfSeventeen(number){
    if(parseInt(number) % 17 === 0){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
