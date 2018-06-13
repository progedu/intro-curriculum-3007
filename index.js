'use strict';

const aaa = Array();
aaa.push(1,2,3,4,5);

function isMultipleOfSeventeen (num) {
    return num % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
