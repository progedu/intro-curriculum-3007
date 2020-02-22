'use strict';
const seventeen = require('./index.js');
const assert = require('assert');

const a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
//console.log(a.filter(value => value > 1));
assert.deepEqual(a.filter(seventeen.isMultipleOfSeventeen), [85, 34]);
//なんで関数呼び出しの()が要らないの？？→filter関数自体がそう言う仕様らしい。callback関数を呼び出すときはいらないって。
//上のconsole.logで確認すると、a.filterで既に配列が渡っている為引数として用意しなくても良い。

console.log('テストが正常に完了しました');
