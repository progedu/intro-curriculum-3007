'use strict';

function isMultipleOfSeventeen(integer) {
    if (integer % 17 === 0) {
        return true;
    }
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
