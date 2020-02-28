'use strict';

function isMulltipleOfSeventeen(integer){
    return integer % 17 === 0;
}
//index.jsに a.filter(isMultipleOfSeventeen)　があるので、↑では関数の定義だけで良い。
//例：[1, 2, 3, 4].filter(function(n){ return n % 2 === 0});


module.exports = { isMulltipleOfSeventeen
}
//ここで作った関数を他ファイルで使えるように

