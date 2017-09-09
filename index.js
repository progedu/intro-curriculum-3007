(function (){

    'use strict';
    /**
     *  17の倍数である場合　trueを返す
     *  @param {number} num
     */
    function isSeventeen(num) {
        return num % 17 === 0;
    }

    module.exports = {
        isSeventeen: isSeventeen
    };
})();
