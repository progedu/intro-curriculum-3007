'use strict';

//17で割り切れるものを取得
function isMultipleOfSeventeen(int) {
    return int % 17 === 0;
}


module.exports = {
    isMultipleOfSeventeen
};
