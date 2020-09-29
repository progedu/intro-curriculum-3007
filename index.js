'use strict';

/**
 * 整数が17で割り切れるとき、trueを返す
 * @param {number} int
 */

 function isMultipleOfSeventeen(int) {
     return int % 17 === 0;　　　//17で割り切れるか検証
 } 


module.exports = {
    isMultipleOfSeventeen
};
