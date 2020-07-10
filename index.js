'use strict';
// @param array
// @return new array
function isMultipleOfSeventeen(num) {
    if(num % 17 === 0) {
        return true;
    } else {
        return false;
    }
} 

module.exports = { isMultipleOfSeventeen };
