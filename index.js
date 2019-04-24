'use strict';

function isMultipleOfSeventeen(a) {
    return a % 17 === 0;
}

function seventeen() {
    return Array.filter(isMultipleOfSeventeen);
}


module.exports = {
    isMultipleOfSeventeen,
    seventeen
};
