'use strict';
const judgement = require('./index.js');
const assert = require('assert');

const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
assert.deepEqual(a.filter(judgement.isMultipleOfSeventeen), [85, 34]);
assert.deepEqual(a.filter(judgement.isEven), [32, 8, 74, 34, 76, 60, 60, 98, 38, 28, 96, 32])

console.log('テストが正常に完了しました');
