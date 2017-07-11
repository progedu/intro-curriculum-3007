'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} num
*/
function isSeventeen(num) {
  returm num % 17 === 0;
}  

module.exports = {
  isSeventeen: isSeventeen
};
