(function () {
	'use strict';
	let seventeen = require('./index.js');
	let assert = require('assert');
	
	let a = [83, 32, 85, 47, 77, 8, 61, 74, 29, 34, 11, 76, 60, 99, 55, 7, 19, 60, 98, 38, 28, 96, 32];
	assert.deepEqual(a.filter(seventeen.isSeventeen), [85, 34]);

	console.log('テストが正常に完了しました');
})();
