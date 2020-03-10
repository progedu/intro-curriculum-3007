'use strict';
//numberが17で割り切れたら返す

function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
  }
  
  module.exports = { 
    isMultipleOfSeventeen
  };