'use strict';

//整数が17で割り切れるか判定する
//@param { integer } 
//@return { boolean } 割り切れるときtrueを返す
let isMultipleOfSeventeen = (number) => {
    return number%17 === 0;
};


module.exports = {
    isMultipleOfSeventeen
}
