/*'use strict';

const numsev = new Map();

function nyuryoku(nyu){
    numsev.set(nyu, false);
}
for(let key, value of )
function judge(suu){
    if(numsev.get((suu[0]%17)==0)){
        numsev.set(suu, true);
    }
}

function shingidake(suuAndtruePair) {
    return suuAndtruePair[1];
  }
  function list() {
    return Array.from(numsev)
      .filter(shingidake)
      .map(t => t[0]);
  }
module.exports = {
}

*/

'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} num
*/
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = { 
  isMultipleOfSeventeen
};