'use strict';
/**
 * 17で割った余りが０（=17の倍数）ならtrueを返す
 * @param {number} num 
 */
function isMultipleOfSeventeen(num) {
    return num % 17 === 0;
}



module.exports = {
  isMultipleOfSeventeen
};
