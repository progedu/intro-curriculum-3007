// 整数が17で割り切れるかどうか判定する関数
'use strict';

//key: 数字 value
const nums = new Map();

/**
 * 配列のうち17で割り切れないものをfalseに変える
 * @param {array} num 
 * @return {array} 
 */
function isMultipleOfSeventeen(num){
    var bool = null;
//    console.log(num.length); //配列で渡されていない(?)からundefined
//    for(var i = 0; i < num.length; i++){ //array.filterが各要素を個別に渡してくれるのでforは不要??
    //    let e[i] = false;
        if(num % 17 != 0){
            bool = false;
        }else{
            bool = true;
        }
//    }
    console.log(num);
    console.log(bool);
    return bool;
}

module.exports = {
    isMultipleOfSeventeen
    
}
