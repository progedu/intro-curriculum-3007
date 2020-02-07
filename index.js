'use strict';

/** 17の倍数のときTrueを返す
 * @param {number} seventeen
 * @return {boolean}
 */
function  isMultipleOfSeventeen(seventeen){
    if ((seventeen % 17) === 0){
        return true
    }else{
        return false
    }
}

module.exports = {
    isMultipleOfSeventeen
};