'use strict';
/**
 * 17の倍数である場合、trueを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}

/** 
 * ☆この関数は、filterで使うので、arrayの中の一要素ごとに判定するモジュールにすればよい
 * 
 * isMultipleOfSeventeen を追加する
 * @param {array} numArray
 * @return {array} 完了したかどうか
*/

/*
function isMultipleOfSeventeen(numArray) {
    let checkArray
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 17) {
            checkArray[i] = false;
        } else {
            checkArray[i] = true;
        }
    }
    return checkArray;
}
*/

module.exports = {
    isMultipleOfSeventeen
}
