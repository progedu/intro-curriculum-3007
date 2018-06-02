'use strict';

function isMultipleOfSeventeen(n){
    if (n % 17 === 0){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
