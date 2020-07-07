'use strict';
/**
 * 17の倍数である場合 true を返す
 * @param {number} atai
 */

function isMultipleOfSeventeen(atai) {
    if (atai % 17 === 0){
        return true
    } else {
        return false
    }
}

module.exports = {
    isMultipleOfSeventeen
};
