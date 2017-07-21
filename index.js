'use strict';

function isSeventeen(num) {
    if (num % 17 === 0) return true;
    return false; 
}

module.exports = {
    isSeventeen: isSeventeen
};
