'use strict';

// 17で割り切れるものだけ取得する
function isMultipleOfSeventeen(int) {
    return int % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
};
