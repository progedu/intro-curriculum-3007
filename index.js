'use strict';
/**
*17の倍数である場合　trueを返す
*@param {nember} num
*/
function isMultipleOfSevebteen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
};
