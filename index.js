'use strict';

function isMultipleOfSeventeen(numbers) {
   const newArr = numbers.filter(number => {
        if (number % 17 === 0) {
            return true
        }
    });
    return newArr;
}

module.exports = {
    isMultipleOfSeventeen
}
