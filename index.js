"use strict";

const seventeen = new Map();

/**
 * @param { number } num
 * @return 17で割り切れるかどうかを返す真偽値
 */

function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { isMultipleOfSeventeen };
