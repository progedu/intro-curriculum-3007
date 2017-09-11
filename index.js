'use strict';

/**
 * 17で割り切れるかどうかを判定する
 * @param { int } num
 * @return { boolean } 17で割り切れるならtrueを返す
 */
function isSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isSeventeen: isSeventeen
};
