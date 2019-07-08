'use strict';

function isMultipleOfSeventeen(x) {
  return x % 17 === 0
}


const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
console.log(a.filter(isMultipleOfSeventeen))
module.exports = {
  isMultipleOfSeventeen
}
