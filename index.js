'use strict';
/**
 * 整数を受け取り17の倍数かどうかの真偽値を返す
 * @param {number} n 
 * @return {boolean} 17の倍数かどうかの真偽値
 */
function isMultipleOfSeventeen(n){
    return n%17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}

