'use strict';

// 自分の回答
// function seventeen(numbers) {
//     const isMultipleOfSeventeen = new Array();
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers % 17 === 0) {
//             isMultipleOfSeventeen = numbers[i]
//         }
//     }
// }
// module.exports = {
//     seventeen: seventeen
// }

/**
* 17の倍数である場合 true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
