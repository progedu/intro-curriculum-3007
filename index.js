'use strict';

/**17の倍数である場合 true を返す
 * 
 * @param {number} num 
*/
function isMultipleOfSeventeen (num) {
  return num % 17 === 0;
}// isMultipleOfSeventeen()

// パッケージの関数として外部に公開する
module.exports = {
  isMultipleOfSeventeen
};
