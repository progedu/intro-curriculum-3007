'use strict';

function seventeen(seven){
    seven.filter(isMultipleOfSeventeen);
}


function isMultipleOfSeventeen(seven){
    return seven % 17 === 0;
}



module.exports={seventeen,isMultipleOfSeventeen};




