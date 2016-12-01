'use strict';

function isSeventeen(number){
    if (number % 17 == 0){
        return true;
    }
    return false;
}

module.exports = {
    isSeventeen: isSeventeen
};
