'use strict';

/**
 * 受け取った値が17で割り切れるかどうかを判定する
 * @param {array} nums
 * @return {array}
*/
function isMultipleOfSeventeen(num){
	return num % 17 === 0;
}

module.exports = {
	isMultipleOfSeventeen
};
