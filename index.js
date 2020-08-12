'use strict';
//{num:数値、state: 割り切れるかどうかの真偽値}
const numbers=new Array();

/**
 * 17の倍数である場合trueを返す
 * @param {numbet} num 
 */
function isMultipleOfSeventeen(num){
    return num%17===0;
}

module.exports = {
    isMultipleOfSeventeen
}
