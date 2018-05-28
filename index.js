'use strict';

function isMultipleOfSeventeen(num) {
  if (num % 17) {
    return false;
  }
  return true;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
