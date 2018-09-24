'use strict';

/**
 * 配列に含まれる整数が17で割り切れるものだけにする
 * @param {array} i
 * @retrun {boolean} 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(i){
    if(i % 17 === 0) {
        return true;
    }
        return false;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
