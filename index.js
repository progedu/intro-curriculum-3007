'use strict';

function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

function isMultipleOfSeven(number) {
    return number % 7 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
    isMultipleOfSeven: isMultipleOfSeven
};
