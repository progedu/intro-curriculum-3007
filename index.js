'use strict';
//key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
* 配列を取り出し、17で割れる時吐き出す
* @param {string} task
*/
function isMultipleOfSeventeen(x) {
	if (x % 17 === 0) {
		return x;
	}
}

module.exports = {
	isMultipleOfSeventeen: isMultipleOfSeventeen
};
