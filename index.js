'use strict';
/**
 * 17 で割り切れるものだけにする
 * @param {array} inputs
 * @return {array} 17で割り切れる要素のみ残した配列

function isMultipleOfSeventeen(inputs) {
  return Array.from(inputs).filter( t => t % 17 === 0 );
}

module.exports = {
  isMultipleOfSeventeen
}
