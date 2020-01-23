'use strict';

function isMultipleOfSeventeen (i) {
    var result = i % 17;
    if (result === 0) {
        return i
    }
}
module.exports = {
    isMultipleOfSeventeen
}
