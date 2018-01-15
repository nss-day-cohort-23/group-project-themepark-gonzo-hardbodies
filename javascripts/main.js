"use strict";

let factory = require("./factory");

let searchbar = require('./searchbar');
let searchbarView = require('./searchbarView');



let formatter = require("./formatter");
let { attractionsByTime } = require("./timeOnLoad");
let { outputToDom } = require('./interactDom');


let areaAttractions = require("./areaAttractions");


let promArr =[
    factory.fetchAttractions(),
    factory.fetchAreas(),
    factory.fetchAttractionTypes()    
];

function attractionTimes(attractions, areas) {
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
    outputToDom(arrayOfAttractions, areas);
}
Promise.all(promArr)
.then( (parkDataArr) => {
    let areas = parkDataArr[1];
    let attractions = formatter.formatData(parkDataArr);
    areaAttractions.attractionName(attractions, areas);
    searchbarView.pressingEnter(attractions);
    attractionTimes(attractions, areas);
});

