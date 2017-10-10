'use strict';

/**
* 17で割り切れるか判定
* @param {int} int
*/
function isMultipleOfSeventeen(int) {
  let result = int % 17;
  if (result === 0) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
