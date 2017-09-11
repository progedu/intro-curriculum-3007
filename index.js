'use strict';


/**
 * 配列を受け取って, 17で割り切れるときにTRUEを返す
 * @param{array} n
 * @return{boolean} 17でわり切れるかどうか 
 */

function isSeventeen(n){
    if( n % 17 === 0 ){
        return true;
    }

/**
 * こちらのほうが記述が少ない
 * return num % 17 === 0;(if文がいらない)
 */

}


module.exports = {
isSeventeen:isSeventeen    
}
