'use strict';
/**
 * １７の倍数ならtrueを返す
 * @param {number} num
 */

 function isMultipleOfSeaventeen(num){
     return num % 17 === 0;
 }

module.exports = {
    isMultipleOfSeaventeen
};
