// 'use strict';

// const seventeen = {};

// function isMultipleOfSeventeen(){
//     return seventeen
//     .filter(a => a % 17 !== 0)
//     .splice(withRemainder, 1);
// }

// module.exports = {
//     isMultipleOfSeventeen
// };

'use strict';

function isMultipleOfSeventeen(num){
    if(num % 17 === 0){ //if省ける
    return num;
    }
}

module.exports = {
     isMultipleOfSeventeen
    };