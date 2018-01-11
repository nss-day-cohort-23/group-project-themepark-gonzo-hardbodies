"use strict";
let factory = require("./factory");
let formatter = require("./formatter");

let areaAttractions = require("./areaAttractions");

let promArr =[
    factory.fetchAttractions(),
    factory.fetchAreas(),
    factory.fetchAttractionTypes()    
];

Promise.all(promArr)
.then( (parkDataArr) => {
    let areas = parkDataArr[1];
    let attractions = formatter.formatData(parkDataArr);
    console.log("attractions", attractions);
    areaAttractions.attractionName(attractions);
});
