'use strict'

/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */

const isMultipleOfSeventeen = seventeen => {
  return seventeen % 17 === 0
}

module.exports = {
  isMultipleOfSeventeen
}
