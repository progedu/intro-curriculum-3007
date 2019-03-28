'use strict';
const five = require('./index.js');
const assert = require('assert');

const a = [10, 20];
assert.deepEqual(a.filter(five.isMultipleOfFive), [10, 20]);

console.log('テストが正常に完了しました');
