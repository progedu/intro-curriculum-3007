'use strict';

/**
* �����̒l�� 17 �Ŋ���؂�鐮���ł���Ɛ^��Ԃ�
* @param {number} num
* @return {boolean} 17 �Ŋ���؂ꂽ���ǂ���
*/
function isSeventeen (num) {
	return num % 17 === 0;
}

module.exports = {
	isSeventeen: isSeventeen
}
