'use strict';
function isMultipleOfSeventeen(num) {
    return (num % 17 === 0);
}

// function multipleOfSeventeenFilter(numbers) {
//     return numbers
//         .filter(isMultipleOfSeventeen());
// }

module.exports = {
    isMultipleOfSeventeen
}
