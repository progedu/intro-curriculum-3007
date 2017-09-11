'use strict';
function isSeventeen(int) {
  if (int % 17 === 0) {
    return int;
  }
}

module.exports = {
  isSeventeen: isSeventeen
}
