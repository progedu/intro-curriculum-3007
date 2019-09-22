'use strict';
function isMultipleOfSeventeen(a) {
  return a.filter(a => a%17 === 0)
}

module.exports = { isMultipleOfSeventeen
}
