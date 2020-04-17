'use strict';

// --- 最初に考えたコード ---
// 連想配列 array を作成
// const array = new Map();
// 連想配列 array に 整数 n を保存したのを 変数 numbers に代入
// const numbers = array.set(n);

// // 整数 n が 17 で割り切れるかどうかを判定する関数
// function  isMultipleOfSeventeen() {
//     return n % 17 === 0;
// }

// 変数 numbers を配列に変換
// Array.from(numbers)
//     .filter(isMultipleOfSeventeen)

// --- エラーメッセージ ---
// ReferenceError: n is not defined


// --- テキスト見ながら ---

// function isMultipleOfSeventeen() {
//     return number % 17 === 0;
// }

// 引数 numberが element に対応する。
// number には、配列が入ってる変数 a の要素一つ一つが順番に渡され、処理される
function isMultipleOfSeventeen(number) {
    return number % 17 === 0;
}

// function seventeen() {
//     return a.filter(isMultipleOfSeventeen);
// }

// isMultipleOfSeventeen 関数を seventeen モジュールに実装
// オブジェクトを export する時の書き方
// オブジェクト名
module.exports = {
    // seventeen
    // オブジェクトのkey名：　オブジェクトのvalue名（関数や文字列とか）
    // hello: "hello world",
    isMultipleOfSeventeen: isMultipleOfSeventeen
}

// 関数単体を export する時の書き方
// module.exports = isMultipleOfSeventeen
