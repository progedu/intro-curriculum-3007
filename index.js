'use strict';

function isSeventeen(n) {
    if (n % 17 === 0) {
        return n;
    }
}

module.exports = {
    isSeventeen: isSeventeen
};