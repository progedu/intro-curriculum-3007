'use strict';
function isMultipleOfSeventeen(number){
    return (number % 17) == 0? true: false;
}
module.exports = {
    'isMultipleOfSeventeen': isMultipleOfSeventeen
}
