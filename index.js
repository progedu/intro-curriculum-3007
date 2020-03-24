'use strict';
/**
17 で割り切れる(true)か否か(false)を返す 
* @param {array} a
* @return {boolean}   
*/
function isMultipleOfSeventeen(a){
　  return (a % 17 == 0);
}
module.exports = { isMultipleOfSeventeen };
