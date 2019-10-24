'use strict';

/**
 * @param {Numner} number
 * @return {Boolean} numberが17で割り切れるかどうか
 */
isMultipleOfSeventeen(number) {
      return (number % 17) === 0;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
