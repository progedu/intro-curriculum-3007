'use strict';

/**
 * 引数が17の倍数であれば　true　を返す
 * @param {int} num 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
