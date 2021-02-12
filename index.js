'use strict';


/**
 * numberがkeyで割り切れるかどうか
 * @param {*} number 
 * @param {*} key
 */
function divisible(number, key){
    if(key===0){
        return false;
    }
    return number%key===0;
}


/**
 * 数字が17で割り切れるかどうか判断する
 * @param {int} number
 * @return {boolean} 17で割りきれるか
 */
function isMultipleOfSeventeen(number){
    return divisible(number, 17);
}

module.exports = {
    isMultipleOfSeventeen
};
