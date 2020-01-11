'use strict';
function  isMultipleOfSeventeen(num){　//関数の定義
    if(num % 17 === 0){ //あまりが0ならtrueを返す
        return true;
    }else {　//違うならfalse
    return false;
    }

}
module.exports = {
    isMultipleOfSeventeen
}
