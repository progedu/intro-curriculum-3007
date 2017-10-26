'use strict';
/*
const ansNums = new Map();

function isSeventeen(nums){
    for(let num of nums){
        if (num % 17 === 0){
            ansNums.set(num);
        }
    }
    return ansNums;
}
考えすぎた・・・ 
*/
function isSeventeen(num){
    return num % 17 === 0;
}


module.exports = {
    /*seventeen: seventeen*/
    /**  「isSeventeen 関数を seventeen モジュールに実装」という言葉に惑わされてしまいました。 */
    isSeventeen: isSeventeen
};
