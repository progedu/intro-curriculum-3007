'use strict';

/**
* number配列を受け取り、真偽値を返す
* @param {number} number
* @return {boolean} 17で割り切れるか
*/
// function isMultipleOfSeventeen(number){
//   if(number % 17 === 0){
//     return true;
//   };
// }
function isMultipleOfSeventeen(number){
  return number % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
