'use strict';

/**
 * 17の倍数である場合 true を返す
 * @param {nummber} num
 */

function isMultipleOfSeventeen(num){
    return num % 17 === 0;  //17で割ったとき0だったら
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen //test.jsで渡されている isMultipleOfSeventeen を呼び出す
}
