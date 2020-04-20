'use strict';

/**
 * 17で割り切れるかチェックする
 *  @param {number} num
 */

 function isMultipleOfSeventeen(num){
    return num % 17 === 0 ;
}

// function isMultipleOfSeventeen(num){
//     if (num % 17 === 0){
//         return num
//     }
//     return
// }


module.exports = { isMultipleOfSeventeen }
