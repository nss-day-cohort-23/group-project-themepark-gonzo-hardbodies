"use strict";
let factory = require("./factory");
let formatter = require("./formatter");
let { attractionsByTime } = require("./timeOnLoad");
let { outputToDom } = require('./interactDom');


let areaAttractions = require("./areaAttractions");

let promArr =[
    factory.fetchAttractions(),
    factory.fetchAreas(),
    factory.fetchAttractionTypes()    
];

function attractionTimes(attractions) {
    let arrayOfAttractions = [];
    attractions.forEach(attraction => {
        if (!attraction.times) {
            arrayOfAttractions.push(attraction);
        } else {
           if (attractionsByTime(attraction.times)){
               arrayOfAttractions.push(attraction);
           }
        }

    });
    console.log('arrayOfAttractions',arrayOfAttractions);
    outputToDom(arrayOfAttractions);
}
Promise.all(promArr)
.then( (parkDataArr) => {
    let areas = parkDataArr[1];
    let attractions = formatter.formatData(parkDataArr);
    console.log("attractions", attractions);
    areaAttractions.attractionName(attractions);
    attractionTimes(attractions);
});
