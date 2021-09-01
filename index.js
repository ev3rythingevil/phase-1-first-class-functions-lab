// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
 let drivers = array.slice(0,2);
    return drivers;
}

const returnLastTwoDrivers = function(array){
    let lastDrivers = array.slice(-2);
    return lastDrivers;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    const multiplier = (num) => num * num;
    return multiplier;
}

function fareDoubler(fare){
    const doubler = fare * 2;
    return doubler;
}

function fareTripler(fare){
    const tripler = fare * 3;
    return tripler;
}

function selectDifferentDrivers(arrayOfDrivers, fnc){
      return fnc(arrayOfDrivers);
}