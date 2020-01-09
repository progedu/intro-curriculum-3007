'use strict'

/**
 * 17で割り切れるもののみ
 * @param {array} numbers
 */
function isMultipleOfSeventeen(number) {
  return number % 17 === 0
}
module.exports = {
  isMultipleOfSeventeen
}
