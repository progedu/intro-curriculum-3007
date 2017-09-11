'use strict';

/**
* 17の倍数である場合 true を返す
* @param {array} num
*/
function isSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isSeventeen: isSeventeen
}
