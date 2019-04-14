'use strict';
function isMultipleOfSeventeen (num) {
    if (num % 17 === 0){
        return num
    } else if (
        num % 17 !== 0
    ) {
        return null
    }
}
module.exports = { isMultipleOfSeventeen
}
