'use strict';

/**
 * 引数が17の倍数であるかを返す
 * @param {bigint} num 
 * @return {boolean} 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
