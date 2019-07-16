'use strict';

/**
 * 配列に含まれる整数が17で割り切れるか判断
 * @param {string} task
 */

function isMultipleOfSeventeen(task){
    if(task%17==0){
        return true;
    }
    return false;
}

module.exports = {
    isMultipleOfSeventeen
};
