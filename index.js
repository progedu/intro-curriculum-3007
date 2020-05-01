'use strict';
/**
 * 整数が17で割り切れるときtrueを返す
 * @param {number} num
 */
const isMultipleOfSeventeen = (num) =>{
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
