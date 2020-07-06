'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}
console.log(isMultipleOfSeventeen(34));

module.exports = { 
  isMultipleOfSeventeen
};

/*
function isMultipleOfSeventeen2() {
    const number = process.argv[2] || 0;
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        if (sum % 17 === 0) {
            console.log(sum);
        }
    }
}
isMultipleOfSeventeen2();
*/