'use strict';

function isSeventeen(num) {

    if(num % 17 === 0) {

        return num ;
    } else {

        return 0;
    }


}

module.exports = {
    isSeventeen: isSeventeen
}
