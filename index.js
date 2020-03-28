'use strict';

function isMultipleOfSeventeen(val){
    console.log("value" + val)

//    console.log(a.list())
    // return Array.from([])
    // const b = Array.from([ 3 ,17 , 34]).filter( n => n % 17 === 0 )
    // const a = Array.from(args).filter( n => n % 17 === 0 )
//    console.log(a)
    return val % 17 ===0
    //    return[ 85 , 34]
}

module.exports = {
    isMultipleOfSeventeen
}
