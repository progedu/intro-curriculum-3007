'use strict';

function  isMultipleOfSeventeen(num) {
    if((num % 17) === 0){
        return 1;
    }
    return 0;
}

module.exports = {
    isMultipleOfSeventeen:  isMultipleOfSeventeen
}
