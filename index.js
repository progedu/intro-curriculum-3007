'use strict';

function isMultipleOfSeventeen(n) {
  if (n % 17 === 0) {
    return n;
  }
}
module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
