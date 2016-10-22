'use strict';
const num = new Map();

function isSeventeen(num){
    return num % 17 === 0; // 17で割り切れるとTrueが返る
}

module.exports = {
    isSeventeen: isSeventeen
}
