'use strict';

function isMultipleOfSeventeen(n){
    //return numbers.filter(n => n%17 === 0); 
    return n%17 === 0; 
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
