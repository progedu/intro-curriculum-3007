'use strict';

function isMultipleOfSeventeen(x) {
        if(x % 17 === 0) {
            return true;
        };
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};