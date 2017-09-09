'use strict';
function isSeventeen(number) {
    if(number % 17 === 0) {
        return number;
    }
}
module.exports = {
    isSeventeen: isSeventeen
}