'use strict';

// @param {array}
// @return {array} //17で割り切れる
function isMultipleOfSeventeen(array) {
    return array.filter((number)=>{
        return number%17===0;
    });
}
module.exports = {
    isMultipleOfSeventeen
};
