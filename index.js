'use strict';
/**
 * @param {array} input
 * @return {array} 
 * 
 * 渡された配列を探索して、17で割れるものだけを拾って新しい配列に入れて返す。
 *
 */
const isMultipleOfSeventeen=(input)=>{
    return (input%17 === 0);
};


module.exports = {
    isMultipleOfSeventeen
}

