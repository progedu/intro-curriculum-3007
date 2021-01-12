'use strict';
const seventeen = require('./index.js'); // index.jsを、seventeenという名前でモジュール化している
const assert = require('assert');

const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
assert.deepStrictEqual(a.filter(seventeen.isMultipleOfSeventeen), [85, 34]); // index.jsのmodule.exportsに、isMultipleOfSeventeenが必要だとわかる

console.log('テストが正常に完了しました');
