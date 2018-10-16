'use strict';

function isMultipleOfSeventeen(number) {
    return number % 17 === 0; //trueになった時
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
