'use strict';

/**
 * 配列に含まれる整数が 17 で割り切れるものだけにする 
 * @param {array} ary
 * @return {array}
 */
function isMultipleOfSeventeen(ary) {
  return ary % 17 === 0
}
module.exports = {
  isMultipleOfSeventeen
}

// let a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32]
// const res = isMultipleOfSeventeen(a);
// console.log(res);