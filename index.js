'use strict';

/**
 * 17で割り切れれば１、余りが出れば０を返す
 * @param {*} integer
 */
function isMultipleOfSeventeen(n) {
  const a = n % 17
  return !(a > 0)
}
module.exports = {
  isMultipleOfSeventeen
}
