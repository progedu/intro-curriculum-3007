'use strict';
function isMultipleOfSeventeen(number) {
    if(number % 17 === 0) {
        return true;
    } else {
        return false; 
    }
}

module.exports = {
    isMultipleOfSeventeen
}
