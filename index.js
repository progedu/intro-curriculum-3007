'use strict';

/**
* 17の倍数である場合 true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}

// filter関数は、指定された配列の要素一つ一つに対して
// 引数に指定された関数で処理されたtrueの要素を返す
// fileter関数は配列内の各要素全てをみていくので、
// 引数に指定する関数内に配列に対しての繰り返し処理は必要無い

// 失敗コード ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// function isMultipleOfSeventeen(numbers) {
//     let resultNumbers = null;
//     for (let value of numbers) {
//         if(value % 17 == 0) {
//             resultNumbers.push(value);
//         }
//     }
//     for(let i = 0; i < numbers.lenght; i++) {
//         if(numbers[i] % 17 === 0) {
//             return numbers[i];
//         }
//     }
//     return resultNumbers;
// }


// 配列に含まれる整数が
// 17 で割り切れるものだけにする seventeen モジュールを
// 実装しています。
// そのために、整数が 17 で割り切れるかどうかを判定する 
// isMultipleOfSeventeen 関数を 
// seventeen モジュールに実装してください。