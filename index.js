'use strict';

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

function isEven(num) {
  return num % 2 === 0;
}

module.exports = {
  isMultipleOfSeventeen,
  isEven
};
