'use strict';

// 配列に含まれる整数が17で割り切れるものだけにする
function isMultipleOfSeventeen(number) {
  return number % 17 === 0
}
module.exports = {
  isMultipleOfSeventeen
}
