'use strict';
// @param int num
// @return boolean
function isMultipleOfSeventeen(num) {
    if(num % 17 === 0) {
        return true;
    } else {
        return false;
    }
} 

module.exports = { isMultipleOfSeventeen };
