'use strict';
// 配列に含まれる整数が 17 で割り切れるものだけにする seventeen モジュールを実装
// 整数が 17 で割り切れるかどうかを判定する isMultipleOfSeventeen 関数

const num = new Map();

function seventeen(num) {
    numbers.set(num, false);
}

function isMultipleOfSeventeen(num) {
    if (num % 17 === 0) {
        return  true;
    } else {
        return false;
    }
}



module.exports = { 
    isMultipleOfSeventeen
}
