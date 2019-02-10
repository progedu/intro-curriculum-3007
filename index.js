'use strict';
function isMultipleOfSeventeen(number) {    
    if (number % 17 === 0) {
        return true;
    } 
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
