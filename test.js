'use strict';

// seventeenオブジェクトが指してるのは、module.exportsの中身全部
const seventeen = require('./index.js');
// const seventeen = { seventeen }

const assert = require('assert');

const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];

// seventeen:オブジェクト、 isMultipleOfSeventeen:関数名
assert.deepEqual(a.filter(seventeen.isMultipleOfSeventeen), [85, 34]);

console.log('テストが正常に完了しました');
