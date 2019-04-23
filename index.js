'use strict';
/**
 * 17の倍数である場合trueを返す
 * @param{number} num
 */
function isMultipleOfSeventeen(seventeen){
    return seventeen %  17=== 0;
}

module.exports = {
    isMultipleOfSeventeen
}
