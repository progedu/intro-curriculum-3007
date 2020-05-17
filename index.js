'use strict';
/**
 * 17の倍数である場合trueを返す
 * @param {number} v 
 */
function isMultipleOfSeventeen(v)
{
  if(v % 17 === 0) {
    return true;
  }
  return false;
}

module.exports = {
  isMultipleOfSeventeen
}
