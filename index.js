'use strict';
function isMultipleOfSeventeen(number){
    return number % 17 === 0;
}

const carMakers = ['Toyota','Nissan', 'BMW', 'Honda', 'GM', 'Ford'];

function isCarMaker(company){
    return carMakers.includes(company);
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen,
    isCarMaker: isCarMaker
}
