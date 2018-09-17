'use strict';

function isMultipleOfSeventeen(value){
    if( 0 === value % 17 ){
        return true
    }
    return false
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
