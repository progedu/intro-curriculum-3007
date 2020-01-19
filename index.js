'use strict';

/**
 * タスクと完了したかどうかが含まれる配列を受け取り、完了したかを返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen
}
