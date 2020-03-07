'use strict';

/**
 * 配列の中身を17で割り切れるものだけにする
 * @param {array} num 
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
